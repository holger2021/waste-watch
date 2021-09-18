const { getConnection, sqlServer, queriesSites } = require("../database");

export class Sites {
    constructor(nombreSite, idOperacion) {
        this.nombreSite = nombreSite;
        this.idOperacion = idOperacion;
    }

    allSites = async() => {
        let result = null, pool = null, allSites = [];

        try {
            // obtengo un pool para la conexion del cliente
            pool = await getConnection();

            // hago una consulta a la db
            result = await pool.request()
                .query(queriesSites.allSites);
        }
        catch (e) {
            result = null;
        }
        if (!result.rowsAffected[0]) {
            allSites.unshift({
                idSite: 0,
                site: 'Seleccionar'
            });
            return false;
        }
        else {
            result.recordset.forEach(site => {
                allSites.push({
                    idSite: site.id,
                    site: site.nombre_site
                });
            });
            allSites.unshift({
                idSite: 0,
                site: 'Seleccionar'
            });
        }
        return  allSites;
    }
}
