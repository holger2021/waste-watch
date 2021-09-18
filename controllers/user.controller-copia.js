const passport = require('passport');

const loginGet = (req, res) => {
    res.render('login/login.ejs');
}

const loginPost = async (req, res, next) => {
    passport.authenticate('local', {
        badRequestMessage: 'Usuario y contraseña requeridos.',
        successRedirect: '/',
        failureRedirect: '/users/login',
        failureFlash: true
    })(req, res, next);
    req.flash('success_msg', 'Bienvenido');

    // const { _username, _password } = req.body;
    // let errors = [];
    // // campos requeridos
    // if (!_username || !_password) {
    //     errors.push('Usuario y contraseña requeridos.');
    // }
    // // validar password contra db
    // else {
    //     // obtengo la conexion contra la db
    //     const pool = await getConnection();
    //     let result = null;
    //
    //     result = await pool.request()
    //         .input('usuario', sqlServer.NVarChar(), _username)
    //         .query(queries.findUserByEmail);
    //     if(result.rowsAffected[0] > 0) {
    //         //comparacion de password del formulario respecto a la db
    //         const passwordValidateDb = validatePassword(_password, result.recordset[0].password.trim());
    //         if (passwordValidateDb) {
    //             req.flash('success_msg', 'Bienvenido');
    //             return res.redirect('/');
    //         }
    //         else {
    //             errors.push('Contraseña errada');
    //         }
    //     }
    //     else {
    //         errors.push('Usuario o contraseña invalido');
    //     }
    // }
    // res.render('login/login.ejs', {
    //     errors,
    //     _username,
    //     _password
    // });
}

const logout = (req, res) => {
    req.logout();
    req.flash('success_msg', 'Sesion cerrada...');
    res.redirect('/users/login');
}


exports = {
    loginGet, loginPost, logout
}
