import { TestQuestionInterface } from '../interfaces/tests/TestQuestionInterface';
import { StudentType } from '../interfaces/students/StudentType';
import { StudentPlacementInterface } from '../interfaces/students/StudentPlacementInterface';
import { d20 } from './dice';

export const runner = (test: TestQuestionInterface[], students: StudentType[]): StudentPlacementInterface[] => {
  const studentResults = students.map((student) => {
    const { name, house, id, pc } = student;

    const result = test.reduce((testPoints, { type, dc, points }) => {
      const questionResult = d20() + student[type.toLowerCase()];

      if (questionResult > dc) {
        testPoints += points;
      }
      return testPoints;
    }, 0);
    return { name, house, result, id: Number(id), pc };
  });

  studentResults.sort((a, b) => b.result - a.result);

  return studentResults.map((studentResult, i) => ({
    ...studentResult,
    placement: i + 1,
  }));
};
