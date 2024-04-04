import { SKILLS } from '../enums/Skills';

interface Question {
  type: SKILLS;
  dc: number;
  points: number;
}

export interface TestInterface {
  name: string;
  test: Question[];
}
