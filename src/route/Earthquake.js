const earthquakeRoute = require('express').Router();
const { getEarthquakes } = require("../controllers/Earthquake")
const boom = require('@hapi/boom');

earthquakeRoute.get('/', (req, res, next) => {

  getEarthquakes(req, res).catch(err => {
    next(err)
  })

  


});

module.exports = earthquakeRoute;