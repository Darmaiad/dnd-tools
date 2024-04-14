import { Prisma } from '@prisma/client';

const studentSelector = {
  name: true,
  house: true,
  dead: true,
  pc: true,
  arcana: true,
  acrobatics: true,
  athletics: true,
  investigation: true,
  school_student_schoolToschool: {
    select: {
      name: true,
    },
  },
};

export const studentSelect = Prisma.validator<Prisma.studentSelect>()(studentSelector);

export const studentSelectType = Prisma.validator<Prisma.studentDefaultArgs>()({
  select: studentSelector,
});

export type StudentPayload = Prisma.studentGetPayload<typeof studentSelectType>;
