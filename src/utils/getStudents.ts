import { StudentType } from '../interfaces/StudentType';
import { SCHOOLS } from '../enums/Schools';
import students from '../students.json';

export const getStudents = (school: SCHOOLS): StudentType[] =>
  students
    .map((student) => ({ ...student, school: student.school as SCHOOLS })) // Typecast school as an Enum
    .filter(({ school: sc }) => sc === school);
