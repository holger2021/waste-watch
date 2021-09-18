const LocalStrategy = require('passport-local').Strategy;
const { IndicadorBascula } = require("../models/indicador-bascula");
const indicadorBascula = new IndicadorBascula();

module.exports = function (passport) {
    passport.use(new LocalStrategy({ usernameField: '_indicador', passwordField: '_indicador'}, async (_indicador, _password, done) => {
        let query = null;

        try {
            query = await indicadorBascula.buscarIndicadorBasculaById(_indicador);
        }
        catch(error) {
            query = null;
        }

        if (!query) {
            return done(null, false, { message: 'Codigo no registrado' });
        }
        else {
            //coincide password
            const match = query.id == _indicador ? true : false;
            if (match) {
                return done(null, query);
            }
        }
    }));

    passport.serializeUser( (indicador, done) => {
        done(null, indicador);
    });

    passport.deserializeUser(async (indicador, done) => {
        const query = await indicadorBascula.buscarIndicadorBasculaById(indicador.id);
        if (!query) {
            return done(null, false, { message: 'Codigo incorrecto...'});
        }
        return done(null, query);
    });
}


