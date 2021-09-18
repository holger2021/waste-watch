const bcrypt = require('bcryptjs');
const { getConnection, sqlServer, queries } = require("../database");

export class Usuarios {
    constructor(identificacion, nombres, apellidos, usuario, password) {
        this.identificacion = identificacion;
        this.nombres = nombres;
        this.apellidos = apellidos
        this.usuario = usuario;
        this.password = password
    }

    // funcion para encriptar la password
    hashPassword = (password, salts) => {
        let salt = bcrypt.genSaltSync(salts);
        return bcrypt.hashSync(password, salt).trim();
    }

    validatePassword = (passwordInput, passwordDb) => {
        return bcrypt.compareSync(passwordInput, passwordDb);
    }

    findUserById = async (identificacion) => {
        // obtengo la conexion contra la db
        const pool = await getConnection();
        let result = null;
        // consulto el usuario
        result = await pool.request()
            .input('identificacion', sqlServer.NVarChar(), identificacion)
            .query(queries.findUserById);
        console.log(result)
        if (result.rowsAffected[0] == 0) {
            return false;
        }
        else {
            const { identificacion, nombres, apellidos, usuario, password } = result.recordset[0];
            const user = new Usuarios(identificacion, nombres, apellidos, usuario, password);
            return  user;
        }
    }
}

