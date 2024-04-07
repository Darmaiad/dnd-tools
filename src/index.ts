import { TestInterface } from './interfaces/TestInterface';
import { SCHOOLS } from './enums/Schools';
import { getStudents } from './utils/getStudents';
import { runner } from './utils/runner';
import { saver } from './utils/saver';
import { printer } from './utils/printers/printer';
import { testPrinter } from './utils/printers/testPrinter';

const starter = async () => {
  const testModule = await import(`./tests/${process.env.TEST}.js`);
  const { name, test }: TestInterface = testModule[process.env.TEST];
  const fullTestName = `${name} Day ${process.env.DAY}`;

  testPrinter(fullTestName, test);

  printer(
    saver(
      runner(test, getStudents(process.env.SCHOOL as SCHOOLS)),
      `../${process.env.SCHOOL}-results/${fullTestName}.json`
    )
  );
};

starter();
