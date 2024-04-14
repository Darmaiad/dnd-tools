import { SCHOOLS } from '../enums/Schools';
import { SKILLS } from '../enums/Skills';

interface StudentRecord {
  school: SCHOOLS;
  name: string;
  house: string;
  dead: boolean;
  pc: boolean;
  // arcana?: number;
  // investigation?: number;
  // acrobatics?: number;
  // athletics?: number;
}

export type StudentType = {
  [key in SKILLS]?: number;
} & StudentRecord;
