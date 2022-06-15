const authRoute = require('express').Router();
const Joi = require('joi');
const boom = require('@hapi/boom');
const { register, login } = require('../controllers/Auth');


const registerSchema = Joi.object({
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required()
});

authRoute.post('/register', (req, res, next) => {
  const { error } = registerSchema.validate(req.body);
  if (error) {
    throw boom.badRequest(error);
  }
  // Our register logic starts here
  register(req).then(
    (result) => {
      res.json(result)
    }
  ).catch((err) => {
    next(err)
  })
});

const loginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required()
});
authRoute.post("/login", (req, res, next) => {
  const { error } = loginSchema.validate(req.body);
  if (error) {
    throw boom.badRequest(error);
  }
  // Our register logic starts here
  login(req).then(
    (result) => {
      res.json(result)
    }
  ).catch((err) => {
    next(err)
  })
});

module.exports = authRoute;