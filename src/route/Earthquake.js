const earthquakeRoute = require('express').Router();
const { getEarthquakes } = require("../controllers/Earthquake")
const boom = require('@hapi/boom');

earthquakeRoute.get('/', (req, res, next) => {
  getEarthquakes(req, res)
    .then((result) => {
      res.json(result)
    })
    .catch(err => {
      next(err)
    })

});

module.exports = earthquakeRoute;