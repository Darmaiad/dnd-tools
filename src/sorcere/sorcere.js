const st = require("../students.json");
const { SCHOOLS } = require("../enums/schools");
const { runner } = require("../utils/runner");
const { saver } = require("../utils/saver");
const { printer } = require("../utils/printer");
const { testPrinter } = require("../utils/printers/testPrinter");

// const { firstTest: testObj } = require('./tests/firstTest');
const { secondTestInvestigation: testObj } = require("./tests/secondTestInvestigation");

const { name, test } = testObj;
const students = st.filter(({ school }) => school.toUpperCase() === SCHOOLS.SORCERE);

testPrinter(name, test);

printer(saver(runner(test, students), name, "./results"));
