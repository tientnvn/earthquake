const { getEarthquake, countEarthquake } = require("../functions/EarthquakeQuery");
const { getPagination } = require('pagination-js');
const boom = require('@hapi/boom');

const getEarthquakes = async (req, res) => {
  let totalItem = await countEarthquake();
  if (totalItem && totalItem.length > 0) {
    let pagination = getPagination(req.query, totalItem[0].total)
    let result = await getEarthquake(pagination);
    res.json({data: result, pagination })
  } else {
    throw boom.badRequest("NoItemWasFound")
  }
  
}


exports.getEarthquakes = getEarthquakes;