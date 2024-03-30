const { SCHOOLS } = require("../enums/schools");
const { runner } = require("../utils/runner");
const { saver } = require("../utils/saver");
const { printer } = require("../utils/printers/printer");
const { getStudents } = require("../utils/getStudents");
const { testPrinter } = require("../utils/printers/testPrinter");

const { magthereFirst: testObj } = require("../tests/magthereFirst");

const { name, test } = testObj;
const students = getStudents(SCHOOLS.MELEE_MAGTHERE);

testPrinter(name, test);

printer(saver(runner(test, students), name));
