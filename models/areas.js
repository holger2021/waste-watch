const { getConnection, sqlServer, queriesAreas } = require("../database");

export class Areas {
    constructor(nombre_area) {
        this.nombre_area = nombre_area;
    }

    allAreas = async () => {
        let result = null, pool = null, allAreas = [];
        try {
            // obtengo un pool para la conexion del cliente
            pool = await getConnection();
            // hago una consulta a la db
            result = await pool.request()
                .query(queriesAreas.allAreas);
        }
        catch (e) {
            result = null;
        }


        if (!result.rowsAffected[0]) {
            allAreas.unshift({
                idArea: 0,
                area: 'Seleccionar'
            });
            return false;
        }
        else {
            result.recordset.forEach(area => {
                allAreas.push({
                    idArea: area.id,
                    area: area.nombre_area,
                });
            });
            allAreas.unshift({
                idArea: 0,
                area: 'Seleccionar',
            });
        }
        return  allAreas;
    }
}
