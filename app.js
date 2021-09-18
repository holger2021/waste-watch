const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require ('path');
const app = express();
const colors = require('colors');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
// passport config
require('./config/passport')(passport);

// ejs
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + '/views'));
app.use(express.static(path.join(__dirname + '/public')));

// bodyParser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//middleware
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

// passport middleware
app.use(passport.initialize());
app.use(passport.session());

// connect flash
app.use(flash());

//global vars
app.use((req, res, next) => {
    //res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null;
    next();
});

// routes
//app.use('/', require('./routes/index'));
app.use('/', require('./routes/user.routes'));
app.use(require('./routes/indicador.routes'));
app.use(require('./routes/serial.routes'));
app.use(require('./routes/select.routes'));

const PORT = process.env.PORT_APP || 5000;

app.listen(PORT, () => {
    console.log(`Server started on ${ PORT }`);
});
