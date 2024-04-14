import { StudentType } from '../../interfaces/StudentType';
import { SCHOOLS } from '../../enums/Schools';
import { StudentPayload } from '../types/student';

export const studentTranform = (students: StudentPayload[]): StudentType[] =>
  students.map(
    ({ name, house, arcana, acrobatics, athletics, investigation, school_student_schoolToschool, dead, pc }) => ({
      name,
      house,
      arcana,
      acrobatics,
      athletics,
      investigation,
      school: school_student_schoolToschool.name as SCHOOLS,
      dead: !!dead,
      pc: !!pc,
    })
  );
