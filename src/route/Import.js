const importRoute = require('express').Router();
const { importData } = require("../controllers/Import")
const Joi = require('joi');
const boom = require('@hapi/boom');

const requestSchema = Joi.object({
  url: Joi.string().required(),
});

importRoute.post('/', (req, res, next) => {
  const { error } = requestSchema.validate(req.query);
  if (error) {
    throw boom.badRequest(error);
  }
  importData({ url: req.query.url })
    .then((message) => {
      res.json(message)
    })
    .catch(err => {
      next(err)
    })


});

module.exports = importRoute;