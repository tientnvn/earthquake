const jwt = require("jsonwebtoken");
const boom = require('@hapi/boom')

const config = process.env;

const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    throw boom.badRequest("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, config.TOKEN_KEY);
    req.user = decoded;
  } catch (err) {
    throw boom.badRequest("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;