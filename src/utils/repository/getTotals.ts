import { PrismaClient } from '@prisma/client';

import { SCHOOLS } from '../../enums/Schools';
import { testSelect, TestPayload } from '../../prisma/types/testResult';
import { StudentPlacementInterface } from '../../interfaces/students/StudentPlacementInterface';
import { testTransform } from '../../prisma/transformations/testTransform';
import { printer } from '../printers/printer';

const findTotals = async () => {
  const prisma = new PrismaClient();

  const tests: TestPayload[] = await prisma.test.findMany({
    where: {
      school: SCHOOLS[process.env.SCHOOL],
    },
    select: testSelect,
  });

  const theTests: StudentPlacementInterface[] = testTransform(tests)
    .sort((a, b) => b.result - a.result)
    .map((record, i) => ({
      ...record,
      placement: i + 1,
    }));

  printer(theTests);
};

findTotals();
