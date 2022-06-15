const importRoute = require('express').Router();
const { importEarthquake } = require("../controllers/Import")

importRoute.post('/', (req, res, next) => {
  importEarthquake()
    .then(() => {
      res.json({ message: 'Done' })
    })
    .catch(err => {
      next(err)
    })


});

module.exports = importRoute;