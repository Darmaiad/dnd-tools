const fs = require('fs');
const path = require('path');

const { printer } = require('./printers/printer');

const resultsPath = '../sorcere/results';

const absPath = path.resolve(__dirname, resultsPath);

const files = fs.readdirSync(absPath, { withFileTypes: true });

const contents = files
  .map(({ name }) => name)
  .map((fileName) => JSON.parse(fs.readFileSync(`${absPath}/${fileName}`, 'utf8')))
  .flat()
  .reduce((acc, { name, house, result }) => {
    if (!acc[`${name} ${house}`]) {
      acc[`${name} ${house}`] = { name, house, result };
    } else {
      acc[`${name} ${house}`] = {
        name,
        house,
        result: (acc[`${name} ${house}`].result += result),
      };
    }
    return acc;
  }, {});

const contentsAsArray = Object.values(contents);

contentsAsArray.sort((a, b) => b.result - a.result);

const contentsWithPlacement = contentsAsArray.map((record, i) => ({
  ...record,
  placement: i + 1,
}));

printer(contentsWithPlacement);
