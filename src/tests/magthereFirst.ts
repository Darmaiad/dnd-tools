import { TestInterface } from '../interfaces/TestInterface';
import { SKILLS } from '../enums/Skills';

const { ACROBATICS, ATHLETICS } = SKILLS;

export const magthereFirst: TestInterface = {
  name: 'Magthere First Test',
  test: [
    {
      type: ACROBATICS,
      dc: 8,
      points: 1,
    },
    {
      type: ACROBATICS,
      dc: 10,
      points: 1,
    },
    {
      type: ACROBATICS,
      dc: 12,
      points: 1,
    },
    {
      type: ACROBATICS,
      dc: 12,
      points: 2,
    },
    {
      type: ACROBATICS,
      dc: 15,
      points: 2,
    },
    {
      type: ACROBATICS,
      dc: 15,
      points: 1,
    },
    {
      type: ACROBATICS,
      dc: 15,
      points: 0.5,
    },
    {
      type: ACROBATICS,
      dc: 18,
      points: 0.5,
    },
    {
      type: ACROBATICS,
      dc: 18,
      points: 0.25,
    },
    {
      type: ACROBATICS,
      dc: 20,
      points: 0.25,
    },
    {
      type: ACROBATICS,
      dc: 22,
      points: 0.25,
    },
    {
      type: ACROBATICS,
      dc: 25,
      points: 0.25,
    },
    {
      type: ATHLETICS,
      dc: 8,
      points: 1,
    },
    {
      type: ATHLETICS,
      dc: 10,
      points: 1,
    },
    {
      type: ATHLETICS,
      dc: 12,
      points: 1,
    },
    {
      type: ATHLETICS,
      dc: 12,
      points: 2,
    },
    {
      type: ATHLETICS,
      dc: 15,
      points: 2,
    },
    {
      type: ATHLETICS,
      dc: 15,
      points: 1,
    },
    {
      type: ATHLETICS,
      dc: 15,
      points: 0.5,
    },
    {
      type: ATHLETICS,
      dc: 18,
      points: 0.5,
    },
    {
      type: ATHLETICS,
      dc: 18,
      points: 0.25,
    },
    {
      type: ATHLETICS,
      dc: 20,
      points: 0.25,
    },
    {
      type: ATHLETICS,
      dc: 22,
      points: 0.25,
    },
    {
      type: ATHLETICS,
      dc: 25,
      points: 0.25,
    },
  ],
};
