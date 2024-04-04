import { StudentInterface } from '../interfaces/StudentInterface';
import { SCHOOLS } from '../enums/Schools';
import students from '../students.json';

export const getStudents = (school: SCHOOLS): StudentInterface[] =>
  students
    .map((student) => ({ ...student, school: student.school as SCHOOLS })) // Typecast school as an Enum
    .filter(({ school: sc }) => sc === school);
