import { Prisma } from '@prisma/client';

const select = {
  test_result_details: {
    select: {
      result: true,
      student: {
        select: {
          id: true,
          name: true,
          house: true,
          pc: true,
        },
      },
    },
  },
};

export const testSelect = Prisma.validator<Prisma.test_resultSelect>()(select);

export const testSelectType = Prisma.validator<Prisma.test_resultDefaultArgs>()({ select });

export type TestPayload = Prisma.studentGetPayload<typeof testSelectType>;
