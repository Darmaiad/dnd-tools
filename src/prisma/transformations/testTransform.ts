import { TestPayload } from '../types/testResult';
import { StudentResultInterface } from '../../interfaces/students/StudentResultInterface';
import { StudentPlacementInterface } from '../../interfaces/students/StudentPlacementInterface';

export const testTransform = (tests: TestPayload[]): StudentPlacementInterface[] => {
  const testResults: StudentResultInterface[] = tests
    .map(({ test_result }) => test_result)
    .flat()
    .map(({ result, student: { name, house, id, pc } }) => ({
      name,
      house,
      result,
      id: Number(id),
      pc: !!pc,
    }));

  const testPlacements = testResults.reduce((acc, { name, house, result, id, pc }) => {
    if (!acc[id]) {
      acc[id] = { name: `${name} ${house}`, result, pc };
    } else {
      acc[id].result += result;
    }
    return acc;
  }, {});

  return Object.values(testPlacements);
};
