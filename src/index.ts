const runner = require('./utils/runner');
const saver = require('./utils/saver');
const getStudents = require('./utils/getStudents');
const printer = require('./utils/printers/printer');
const testPrinter = require('./utils/printers/testPrinter');

const { name, test } = require(`./tests/${process.env.TEST}`);
const fullTestName = `${name} Day ${process.env.DAY}`;

testPrinter(fullTestName, test);

printer(
  saver(
    runner(test, getStudents(process.env.SCHOOL)),
    `../${process.env.SCHOOL}-results/${fullTestName}.json`
  )
);
