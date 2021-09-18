import {Usuarios} from "../models/usuarios";

const passport = require('passport');

const loginGet = (req, res) => {
    res.render('login/login.ejs');
}

const loginPost = async (req, res, next) => {
    passport.authenticate('local', {
        badRequestMessage: 'Debe digitar un codigo valido.',
        successRedirect: '/indicador',
        failureRedirect: '/',
        failureFlash: true
    })(req, res, next);
    //req.flash('success_msg', 'Bienvenido');
}

const logout = (req, res) => {
    req.logout();
    req.flash('success_msg', 'Sesion cerrada...');
    res.redirect('/');
}


export {
    loginGet, loginPost, logout
}
