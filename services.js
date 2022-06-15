// call confiHelperg in .env
require('dotenv').config();

const express = require('express');
const apiRoutes = require('./src/route/Routes');
const bodyParser = require('body-parser');
const fs = require('fs');
var path = require('path');
const https = require('https');
const enableSSL = process.env.ENABLE_SSL == 'true';
var morgan = require('morgan');
const cors = require('./src/middleware/Cors');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

// const mongoose = require('mongoose');
// const { MONGO_USERNAME, MONGO_PASSWORD, MONGO_HOST, MONGO_PORT, MONGO_DBNAME } = process.env;
// const MONGO_URI = `mongodb://${(MONGO_USERNAME != "") ? `${MONGO_USERNAME}:${MONGO_PASSWORD}@` : ""}${MONGO_HOST}:${MONGO_PORT}/${MONGO_DBNAME}${(MONGO_USERNAME != "") ? `?authSource=admin` : ""}`
// mongoose.connect(MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true });

// Initialize the app
const app = express();

const logDir = './logs';

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

// Setup server port
const port = process.env.PORT || 8810;

// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'logs/access.log'), { flags: 'a' });

// setup the logger
app.use(morgan('combined', { stream: accessLogStream }));

// Configure bodyparser to handle post requests
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());
app.use(cors);

app.use('/api', apiRoutes);

app.use((err, req, res, next) => {
  if (err.isServer) {
    // log the error...
    // probably you don't want to log unauthorized access
    // or do you?
  }
  // console.log(err);
  if (err.output) {
    return res.status(err.output.statusCode).json(err.output.payload);
  }

  res.status(500).json(err);
});

// Launch app to listen to specified port
if (!enableSSL) {
  app.listen(port, () => {
    console.log('Running Service dev on port ' + port);
  });
} else {
  const httpsOptions = {
    key: fs.readFileSync(process.env.SSL_KEY),
    cert: fs.readFileSync(process.env.SSL_CRT),
  };
  https.createServer(httpsOptions, app).listen(port, () => {
    console.log('Running Service prod on port ' + port);
  });
}
