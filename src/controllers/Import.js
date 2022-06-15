const axios = require("axios");
const { saveEarthquake } = require("../functions/EarthquakeQuery");
const { saveDatastore } = require("../functions/DatastoreQuery");
const boom = require('@hapi/boom');
const { APP_IMPORT_EARTHQUAKE_URL } = process.env

const importEarthquake = async () => {
  try {
    let response = await axios.get(APP_IMPORT_EARTHQUAKE_URL)
    response.data.features.slice(0, 100).forEach(element => {
      saveEarthquake(element)
    });
    return { message: "Import done" }

  } catch (err) {
    throw boom.badRequest(err.message)
  }

}

const importData = async ({ url, headers }) => {
  try {
    let response = await axios.get(url)
    let features = response.data.features.slice(0, 50)
    saveDatastore({
      type: "", req_url: url, headers: JSON.stringify(headers),
      response: JSON.stringify({ ...response.data, features })
    })
    return { message: "Import success" }
  } catch (err) {
    throw boom.badRequest(err.message)
  }

}


exports.importEarthquake = importEarthquake;
exports.importData = importData;