const fs = require("fs");

const { printer } = require("../utils/printers/printer");

const path = "./results";
const files = fs.readdirSync(path, { withFileTypes: true });

const contents = files
  .map(({ name }) => name)
  .map((fileName) => JSON.parse(fs.readFileSync(`${path}/${fileName}`, "utf8")))
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
