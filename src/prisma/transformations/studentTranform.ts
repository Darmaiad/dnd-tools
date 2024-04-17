import { StudentType } from '../../interfaces/students/StudentType';
import { StudentPayload } from '../types/student';

export const studentTranform = (students: StudentPayload[]): StudentType[] =>
  students.map(
    ({
      id,
      name,
      house,
      school,
      arcana,
      acrobatics,
      athletics,
      investigation,
      school_student_schoolToschool,
      dead,
      pc,
    }) => ({
      id: Number(id),
      name,
      house,
      arcana,
      acrobatics,
      athletics,
      investigation,
      school,
      schoolName: school_student_schoolToschool.name,
      dead: !!dead,
      pc: !!pc,
    })
  );
