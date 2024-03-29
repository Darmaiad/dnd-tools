const { SCHOOLS } = require("../enums/schools");
const { runner } = require("../utils/runner");
const { saver } = require("../utils/saver");
const { printer } = require("../utils/printers/printer");
const { getStudents } = require("../utils/getStudents");
const { testPrinter } = require("../utils/printers/testPrinter");

const { sorcereFirst: testObj } = require("../tests/sorcereFirst");
// const { sorcere2ndInvestigation: testObj } = require("../tests/sorcere2ndInvestigation");

const { name, test } = testObj;
const students = getStudents(SCHOOLS.SORCERE);

testPrinter(name, test);

printer(saver(runner(test, students), name, "./results"));
