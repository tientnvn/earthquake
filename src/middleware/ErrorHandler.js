const boom = require('@hapi/boom');
// wrapper for our async route handlers
// probably you want to move it to a new file
const asyncErrorHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch((err) => {
    if (!err.isBoom) {
      // console.log(err);
      return next(boom.badImplementation(err));
    }
    next(err);
  });
};

module.exports = asyncErrorHandler;
