// Dependencies =============================================================================
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const router = require('./controllers');
const helpers = require('./util/helpers');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// sequelize store =============================================================================
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: process.env.DB_SESSION_SECRET,
    cookie: {
        maxAge: 600000
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

// express session middleware =========================================================
app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// routes =============================================================================
app.use(router);

// sync models (console log to test) ==================================================
sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
        console.log(`Grouper App listening on port ${PORT}!`);
    });
});
