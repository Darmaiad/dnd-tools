import 'dotenv/config';

import { getTest } from './utils/getTest';
import { SCHOOLS } from './enums/Schools';
import { getStudents } from './utils/getStudents';
import { runner } from './utils/runner';
import { saver } from './utils/saver';
import { printer } from './utils/printers/printer';

const starter = async () => {
  const { name, test } = await getTest();
  const students = await getStudents(process.env.SCHOOL as SCHOOLS);

  printer(saver(runner(test, students), `../${process.env.SCHOOL}-results/${name}.json`));
};

starter();

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });
