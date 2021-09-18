const { getConnection, sqlServer, queriesIndicadorBascula } = require("../database");

export class IndicadorBascula {
    constructor(id, nombreBascula, observacion) {
        this.id = id;
        this.nombreBascula = nombreBascula;
        this.observacion = observacion;
    }

    async buscarIndicadorBasculaById(idBascula) {
        let result = null;
        // obtengo la conexion contra la db
        const pool = await getConnection();
        // realizo la consulta
        result = await pool.request()
            .input('idBascula', sqlServer.NVarChar(), idBascula)
            .query(queriesIndicadorBascula.findIndicadorBasculaById);

        if (!result.rowsAffected[0]) {
            return false;
        }
        else {
            const { id, nombre_bascula, observacion } = result.recordset[0];
            const indicador = new IndicadorBascula(id, nombre_bascula, observacion);
            return  indicador;
        }
    }
}
