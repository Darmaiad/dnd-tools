const { runner } = require('./utils/runner');
const { saver } = require('./utils/saver');
const { getStudents } = require('./utils/getStudents');
const { printer } = require('./utils/printers/printer');
const { testPrinter } = require('./utils/printers/testPrinter');

const theTest = require(`./tests/${process.env.TEST}`);

const { name, test } = theTest;
const n = `${name} Day ${process.env.DAY}`;
const students = getStudents(process.env.SCHOOL);

testPrinter(n, test);

printer(saver(runner(test, students), `../${process.env.SCHOOL}/results/${n}.json`));
