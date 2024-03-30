const colors = require('colors');

module.exports = (color, { placement, name, house, result }) =>
  console.log(colors[color](`${placement}. ${name} ${house}: ${result}`));
