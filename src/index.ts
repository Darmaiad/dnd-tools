import 'dotenv/config';

import { getTest } from './utils/repository/getTest';
import { SCHOOLS } from './enums/Schools';
import { getStudents } from './utils/repository/getStudents';
import { runner } from './utils/runner';
import { saver } from './utils/saver';
import { printer } from './utils/printers/printer';

const starter = async () => {
  const { name, test } = await getTest();

  const students = await getStudents(SCHOOLS[process.env.SCHOOL]);
  const results = await saver(runner(test, students), name);

  printer(results);
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
