// import { writeFile } from 'fs';
// import path from 'path';
import { PrismaClient } from '@prisma/client';

import { StudentPlacementInterface } from '../interfaces/students/StudentPlacementInterface';
import { SCHOOLS } from '../enums/Schools';

export const saver = async (
  results: StudentPlacementInterface[],
  name: string
): Promise<StudentPlacementInterface[]> => {
  const resultsPath = `../${process.env.SCHOOL}-results/${name}.json`;

  // writeFile(path.resolve(__dirname, resultsPath), JSON.stringify(results, null, 2), (error) => {
  //   if (error) {
  //     console.log('An error has occurred ', error);
  //     return;
  //   }
  //   console.log('\nTest Saved Successfully');
  // });

  const prisma = new PrismaClient();
  await prisma.$transaction((trx) =>
    trx.test.create({
      data: {
        name,
        school: SCHOOLS[process.env.SCHOOL],
        test_result: {
          create: results.map(({ id, result, placement }) => ({
            student_id: id,
            result,
            placement,
          })),
        },
      },
    })
  );

  return results;
};
