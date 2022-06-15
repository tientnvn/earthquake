const axios = require("axios");
const { saveEarthquake } = require("../functions/EarthquakeQuery");
const boom = require('@hapi/boom');
const {APP_IMPORT_EARTHQUAKE_URL} = process.env

const importEarthquake = async () => {
  try {
    let response = await axios.get(APP_IMPORT_EARTHQUAKE_URL)
    response.data.features.slice(0, 100).forEach(element => {
      saveEarthquake(element)
    });
  
  } catch (err ) {
    throw boom.badRequest(err.message)
  }
  
}


exports.importEarthquake = importEarthquake;