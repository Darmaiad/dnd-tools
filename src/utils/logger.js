const colors = require('colors');

const logger = (color, { placement, name, house, result }) =>
  console.log(colors[color](`${placement}. ${name} ${house} : ${result}`));

module.exports = { logger };
