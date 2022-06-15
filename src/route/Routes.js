// Initialize express router
const router = require('express').Router();
const asyncErrorHandler = require('../middleware/ErrorHandler');
const { SERVICE_NAME } = process.env;
const importEarthquakeRoute = require('./ImportEarthquake');
const importRoute = require('./Import');
const dataRoute = require('./Data');
const authRoute = require('./Auth');
const earthquakeRoute = require('./Earthquake');
const auth = require("../middleware/Auth");

// Health check route API
router.get('/', asyncErrorHandler((req, res) => {
  res.json({
    status: 'API Its Working',
    message: `Welcome to ${SERVICE_NAME} Services`,
  });
})
);

router.use('/earthquakes/import', [], asyncErrorHandler(importEarthquakeRoute));
router.use('/earthquakes', auth, asyncErrorHandler(earthquakeRoute));

router.use('/data/import', [], asyncErrorHandler(importRoute));
router.use('/data', auth, asyncErrorHandler(dataRoute));

router.use('/auth', [], asyncErrorHandler(authRoute));

// Export API routes
module.exports = router;
