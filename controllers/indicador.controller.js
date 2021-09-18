const { Sites, Areas, ProductosBascula } = require("../models");

const sites = new Sites();
const areas = new Areas();
const productosBascula = new ProductosBascula();

const indicador = async (req, res) => {
    // consultar los sites del sistema
    const allSites = await sites.allSites();
    const allAreas = await areas.allAreas();
    res.render('indicador/indicador.ejs', { allSites, allAreas });
}

const indicadorPost = async (req, res) => {
    const { producto, peso, area, site, indicador, tipo, menu, sector  } = req.body;
    const pesoBascula = peso.split(' ')[0];
    //guardo la informacion en la tabla productos bascula
    switch (Number(area)) {
        case 1:case 2:
            await productosBascula.saveProductosBascula(area, producto, pesoBascula, new Date(Date.now()), site, indicador, 0, 0, 0);
            break;
        case 3:
            await productosBascula.saveProductosBascula(area, producto, pesoBascula, new Date(Date.now()), site, indicador, sector, menu, 0);
            break;
        case 4:
            await productosBascula.saveProductosBascula(area, producto, pesoBascula, new Date(Date.now()), 0, 0, tipo);
            break;
    }
    //await productosBascula.saveProductosBascula(area, producto, pesoBascula, new Date(Date.now()), site, indicador, 0, 0, tipo);
}

const ingresos = async (req, res) => {
    //obtengo el parametro para visualizar los registros del indicador actual
    const { id } = req.params;
    // consulto la informacion y envio a la tabla
    const registros = await productosBascula.getRegistrosIndicador(id);
    res.render('indicador/ingresos.ejs', { registros });
}

export {
    indicador, indicadorPost, ingresos
}
