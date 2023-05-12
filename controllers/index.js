const router = require('express').Router();
const apiRoutes = require('./api');
const frontEndRoutes = require("./api/frontEndRoutes")

router.use('/api', apiRoutes);
router.use( frontEndRoutes);

module.exports = router;
