module.exports = {
    ensureAuthenticated: function (req, res, next) {
        if(req.isAuthenticated()) {
            return next();
        }
        req.flash('error_msg', 'Debe autenticarse para acceder...');
        res.redirect('/');
    }
}
