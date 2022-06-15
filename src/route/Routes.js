// Initialize express router
const router = require('express').Router();
const asyncErrorHandler = require('../middleware/ErrorHandler');
const { SERVICE_NAME } = process.env;
const importRoute = require('./Import');
const earthquakeRoute = require('./Earthquake');

// Health check route API
router.get('/', asyncErrorHandler((req, res) => {
  res.json({
    status: 'API Its Working',
    message: `Welcome to ${SERVICE_NAME} Services`,
  });
})
);

router.use('/earthquakes/import', [], asyncErrorHandler(importRoute));
router.use('/earthquakes', [], asyncErrorHandler(earthquakeRoute));

// Export API routes
module.exports = router;
