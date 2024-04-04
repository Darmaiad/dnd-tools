// import { StudentInterface } from '../interfaces/StudentInterface';
import { SCHOOLS } from '../enums/Schools';
import st from '../students.json';

type StudentType = typeof st;

export const getStudents = (school: SCHOOLS): StudentType => st.filter(({ school: sc }) => sc === school);
