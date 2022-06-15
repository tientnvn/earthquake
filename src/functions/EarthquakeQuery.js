const { query } = require('./database');
const SQL = require('sql-template-strings');

module.exports.saveEarthquake = async ({ properties:
  { mag, place, tz, url, detail, felt, cdi, mmi, alert, status, tsunami, sig,
    net, code, ids, sources, types, nst, dmin, rms, gap, magType, type } }) => {
  let queryInsertEarthquake = SQL`INSERT INTO earthquake 
  ( type, mag, place, tz, url, detail, felt, cdi, mmi, alert, status, tsunami, sig,
    net, code, ids, sources, types, nst, dmin, rms, gap, mag_type ) 
  VALUES (${type}, ${mag}, ${place}, ${tz}, ${url}, ${detail}, ${felt}, ${cdi}, 
    ${mmi}, ${alert}, ${status},  ${tsunami}, ${sig},
    ${net}, ${code}, ${ids}, ${sources}, ${types}, ${nst}, ${dmin}, ${rms}, ${gap}, ${magType})`;
  return (await query(queryInsertEarthquake));
}


module.exports.getEarthquake = async ({itemPerPage, minIndex}) => {
  let queryEarthquake = SQL`SELECT * from earthquake LIMIT ${itemPerPage} OFFSET ${minIndex}`;
  return (await query(queryEarthquake));
}

module.exports.countEarthquake = async () => {
  let queryEarthquake = SQL`SELECT count(*) as total from earthquake`;
  return (await query(queryEarthquake));
}