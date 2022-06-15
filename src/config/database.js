const mongoose = require("mongoose");

exports.connect = () => {
  // Connecting to the database
  const { MONGO_USERNAME, MONGO_PASSWORD, MONGO_HOST, MONGO_PORT, MONGO_DBNAME } = process.env;
  const MONGO_URI = `mongodb://${(MONGO_USERNAME != "") ? `${MONGO_USERNAME}:${MONGO_PASSWORD}@` : ""}${MONGO_HOST}:${MONGO_PORT}/${MONGO_DBNAME}${(MONGO_USERNAME != "") ? `?authSource=admin` : ""}`
  mongoose.connect(MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((error) => {
      console.log("database connection failed. exiting now...");
      console.error(error);
      process.exit(1);
    });
};