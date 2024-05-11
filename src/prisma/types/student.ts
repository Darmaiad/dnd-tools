import { Prisma } from '@prisma/client';

const select = {
  id: true,
  name: true,
  house: true,
  dead: true,
  pc: true,
  arcana: true,
  acrobatics: true,
  athletics: true,
  investigation: true,
  school: true,
  school_student_schoolToschool: {
    select: {
      name: true,
    },
  },
};

export const studentSelect = Prisma.validator<Prisma.studentSelect>()(select);

export const studentSelectType = Prisma.validator<Prisma.studentDefaultArgs>()({ select });

export type StudentPayload = Prisma.studentGetPayload<typeof studentSelectType>;
