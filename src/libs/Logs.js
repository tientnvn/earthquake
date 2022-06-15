const { createLogger, format, transports } = require("winston");
const { combine, timestamp, label, printf, splat, simple } = format;

const myFormat = printf((data) => {
  return `${data.timestamp} [${data.level}]: ${data.message} ${JSON.stringify(
    data[Symbol.for("splat")][0]
  )}`;
});

let trans;
let fmt;
if (process.env.LOG_TYPE == "file") {
  trans = [
    new transports.File({ filename: "logs/error.log", level: "error" }),
    new transports.File({ filename: "logs/combined.log" }),
  ];
  fmt = combine(splat(), timestamp(), myFormat);
} else {
  trans = [new transports.Console()];
  fmt = format.json();
}

const logger = createLogger({
  level: process.env.NODE_ENV == "production" ? "info" : "debug",
  format: fmt,
  transports: trans,
});

module.exports.writeLogs = async (level, message, object = {}) => {
  return logger.log(level, message, object);
};
