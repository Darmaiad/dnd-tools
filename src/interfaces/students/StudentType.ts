import { SKILLS } from '../../enums/Skills';

interface StudentRecord {
  id: number;
  name: string;
  house: string;
  dead: boolean;
  pc: boolean;
  school: number;
  schoolName: string;
}

export type StudentType = {
  [key in SKILLS]?: number;
} & StudentRecord;
