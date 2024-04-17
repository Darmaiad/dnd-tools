// https://stackoverflow.com/questions/17380845/how-do-i-convert-a-string-to-enum-in-typescript

import { StudentPlacementInterface } from '../../interfaces/students/StudentPlacementInterface';
// import { PCS } from '../../enums/Pcs';
import { logger } from '../logger';

export const printer = (results: StudentPlacementInterface[]) => {
  results.forEach((resultRecord) => {
    // if (Object.values(PCS).includes(PCS[resultRecord.name.toUpperCase() as keyof typeof PCS])) {
    if (resultRecord.pc === true) {
      logger('red', resultRecord);
    } else {
      logger('green', resultRecord);
    }
  });
};
