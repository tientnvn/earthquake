const importEarthquakeRoute = require('express').Router();
const { importEarthquake } = require("../controllers/Import")

importEarthquakeRoute.post('/', (req, res, next) => {
  importEarthquake()
    .then(() => {
      res.json({ message: 'Done' })
    })
    .catch(err => {
      next(err)
    })


});

module.exports = importEarthquakeRoute;