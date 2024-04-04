import { TestQuestionInterface } from '../interfaces/TestQuestionInterface';
import { StudentInterface } from '../interfaces/StudentInterface';
import { StudentResultInterface } from '../interfaces/StudentResultInterface';
import { d20 } from './dice';

export const runner = (test: TestQuestionInterface[], students: StudentInterface[]): StudentResultInterface[] => {
  const studentResults = students.map((student) => {
    const { name, house } = student;

    const result = test.reduce((testPoints, { type, dc, points }) => {
      const questionResult = d20() + student[type.toLowerCase()];

      if (questionResult > dc) {
        testPoints += points;
      }
      return testPoints;
    }, 0);
    return { name, house, result };
  });

  studentResults.sort((a, b) => b.result - a.result);

  return studentResults.map((studentResult, i) => ({
    ...studentResult,
    placement: i + 1,
  }));
};
