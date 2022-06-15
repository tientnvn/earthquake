const getDataRoute = require('express').Router();
const { getData } = require("../controllers/Datastore")

getDataRoute.get('/', (req, res, next) => {
  getData(req, res)
    .then((result) => {
      res.json(result)
    })
    .catch(err => {
      next(err)
    })

});

module.exports = getDataRoute;