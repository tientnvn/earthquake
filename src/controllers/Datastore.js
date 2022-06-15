const { getDatastore, countDatastore } = require("../functions/DatastoreQuery");
const { getPagination } = require('pagination-js');
const boom = require('@hapi/boom');

const getData = async (req, res) => {
  let totalItem = await countDatastore();
  if (totalItem && totalItem.length > 0) {
    let pagination = getPagination(req.query, totalItem[0].total)
    let result = await getDatastore(pagination);
    let finalRes = await Promise.all(result.map((item) => {
      return {
        ...item,
        response: JSON.parse(item.response)
      }
    }))
    return { data: finalRes, pagination }
  } else {
    throw boom.badRequest("NoItemWasFound")
  }

}


exports.getData = getData;