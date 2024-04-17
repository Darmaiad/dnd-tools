import { PrismaClient } from '@prisma/client';

import { StudentType } from '../../interfaces/students/StudentType';
import { studentSelect, StudentPayload } from '../../prisma/types/student';
import { studentTranform } from '../../prisma/transformations/studentTranform';

export const getStudents = async (school: number): Promise<StudentType[]> => {
  const prisma = new PrismaClient();
  const allSt: StudentPayload[] = await prisma.student.findMany({ select: studentSelect });

  return studentTranform(allSt).filter(({ school: sc }) => sc === school);
};

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });
