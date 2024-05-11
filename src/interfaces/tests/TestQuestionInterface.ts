import { SKILLS } from '../../enums/Skills';

export interface TestQuestionInterface {
  type: SKILLS;
  dc: number;
  points: number;
}
