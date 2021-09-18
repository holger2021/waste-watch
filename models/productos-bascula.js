import {queriesProductosBascula} from "../database";

const { getConnection, sqlServer } = require("../database");

export class ProductosBascula {
    constructor(idProducto, pesoProducto, fechaRegistro, idArea, idSite, indicadorBascula) {
        this.idProducto = idProducto;
        this.pesoProducto = pesoProducto;
        this.fechaRegistro = fechaRegistro;
        this.idArea = idArea;
        this.idSite = idSite;
        this.indicadorBascula = indicadorBascula;
    }

    saveProductosBascula = async (idArea, idProducto,pesoProducto, fecha, site, id_indicador_bascula, sector, menu, tipo) => {
        const pool = await getConnection();
        await pool.request()
            .input('id_producto', sqlServer.Int(), idProducto)
            .input('peso', sqlServer.Float(), pesoProducto)
            .input('fecha_registro', sqlServer.Date(), fecha)
            .input('id_area', sqlServer.Int(), idArea)
            .input('id_site', sqlServer.Int(), site)
            .input('id_indicador_bascula', sqlServer.Int(), id_indicador_bascula)
            .input('sector', sqlServer.Int(), sector)
            .input('menu', sqlServer.Int(), menu)
            .input('tipo', sqlServer.Int(), tipo)
            .query(queriesProductosBascula.saveProductosBascula);

        console.log('Guardado...');
    }

    getRegistrosIndicador = async (id_indicador_bascula) => {
        const pool = await getConnection();
        const result = await pool.request()
            .input('id_indicador_bascula', sqlServer.Int(), id_indicador_bascula)
            .query(queriesProductosBascula.getRegistrosIndicador);

        if (result.rowsAffected == 0) {
            return [];
        }
        return result.recordset;
    }

}
