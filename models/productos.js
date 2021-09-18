const { getConnection, sqlServer, queriesProductos } = require("../database");

export class Productos {
    constructor(nombreProducto, idCategoria, observacion) {
        this.nombreProducto = nombreProducto;
        this.idCategoria = idCategoria;
        this.observacion = observacion;
    }

    productosByIdArea = async (idArea) => {
        let result = null, allProductos = [], pool = null;

        try {
            // obtengo un pool para la conexion del cliente
            pool = await getConnection();

            // hago una consulta a la db
            result = await pool.request()
                .input('idArea', idArea)
                .query(queriesProductos.productosByArea);
        }
        catch (err) {
            pool = null;
        }
        if (!result.rowsAffected[0]) {
            allProductos.unshift({
                idProducto: 0,
                producto: 'Seleccionar'
            });
        }
        else {
            result.recordset.forEach(producto => {
                allProductos.push({
                    idProducto: producto.id,
                    producto: producto.nombre_producto
                });
            });
            allProductos.unshift({
                idProducto: 0,
                producto: 'Seleccionar'
            });
        }
        return  allProductos;
    }
}
