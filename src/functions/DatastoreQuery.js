const { query } = require('./database');
const SQL = require('sql-template-strings');

module.exports.saveDatastore = async ({type, req_url, headers, response }) => {
  let queryInsertEarthquake = SQL`INSERT INTO datastore 
  ( type, req_url, headers, response ) 
  VALUES (${type}, ${req_url}, ${headers}, ${response})`;
  return (await query(queryInsertEarthquake));
}


module.exports.getDatastore = async ({itemPerPage, minIndex}) => {
  let queryEarthquake = SQL`SELECT * from datastore LIMIT ${itemPerPage} OFFSET ${minIndex}`;
  return (await query(queryEarthquake));
}

module.exports.countDatastore = async () => {
  let queryEarthquake = SQL`SELECT count(*) as total from datastore`;
  return (await query(queryEarthquake));
}