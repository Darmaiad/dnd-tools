import { TestInterface } from '../interfaces/tests/TestInterface';
import { testPrinter } from '../utils/printers/testPrinter';

export const getTest = async (): Promise<TestInterface> => {
  const testModule = await import(`../tests/${process.env.TEST}.js`);
  const { name, test }: TestInterface = testModule[process.env.TEST];
  const fullTestName = `${name} Day ${process.env.DAY}`;

  testPrinter(fullTestName, test);

  return { name: fullTestName, test };
};
