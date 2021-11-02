const router = require('express').Router();

const apiRoutes = require('./api');
const dashboardRoutes = require('./dashboard_routes');
const homeRoutes = require('./home-routes.js');

router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);
router.use('/', homeRoutes);

module.exports = router;
