// pulls .env file data for auth
require('dotenv').config();

// Dependencies =============================================================================
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

// sequalize store =============================================================================
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'grouper secret O.o',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};
// express session middleware =============================================================================
app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));

// routes =============================================================================
require("./controller/apiRoutes");
require("./controller/htmlRoutes");

// sync models (console log to test.)
db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
        console.log(`Grouper App listening on port ${PORT}!`);
    });
});