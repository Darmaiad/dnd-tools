import { Prisma } from '@prisma/client';

const select = {
  test_result: {
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

export const testSelect = Prisma.validator<Prisma.testSelect>()(select);

export const testSelectType = Prisma.validator<Prisma.testDefaultArgs>()({ select });

export type TestPayload = Prisma.studentGetPayload<typeof testSelectType>;
