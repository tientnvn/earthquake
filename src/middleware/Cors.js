module.exports = (req, res, next) => {
  // Allow Origins
  res.header("Access-Control-Allow-Origin", "*");
  // Allow Methods
  res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
  // Allow Headers
  res.header("Access-Control-Allow-Headers", "Origin, Accept, Content-Type, Authorization, correlation-id");
  // Handle preflight, it must return 200
  if (req.method === "OPTIONS") {
      // Stop the middleware chain
      return res.status(200).end();
  }
  // Next middleware 
  next();
}