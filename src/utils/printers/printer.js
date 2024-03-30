const PCS = require('../../enums/pcs');
const logger = require('../logger');

module.exports = (results) =>
  results.forEach((resultRecord) => {
    if (Object.values(PCS).includes(resultRecord.name.toUpperCase())) {
      logger('red', resultRecord);
    } else {
      logger('green', resultRecord);
    }
  });
