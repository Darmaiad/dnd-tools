import fs from 'fs';
import path from 'path';

import { printer } from './printers/printer';

const resultsPath = `../${process.env.SCHOOL}-results`;
const absPath = path.resolve(__dirname, resultsPath);
const files = fs.readdirSync(absPath, { withFileTypes: true });

interface TestRecord {
  name: string;
  house: string;
  result: number;
}

const contents = files
  .map(({ name }) => name)
  .filter((name) => !['.gitignore', 'empty.js'].includes(name))
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

const testRecords: TestRecord[] = Object.values(contents);

printer(
  testRecords
    .sort((a, b) => b.result - a.result)
    .map((record, i) => ({
      ...record,
      placement: i + 1,
    }))
);
