// https://stackoverflow.com/questions/17380845/how-do-i-convert-a-string-to-enum-in-typescript

import { StudentResultInterface } from '../../interfaces/StudentResultInterface';
import { PCS } from '../../enums/Pcs';
import { logger } from '../logger';

export const printer = (results: StudentResultInterface[]) => {
  results.forEach((resultRecord) => {
    // if (Object.values(PCS).includes(PCS[resultRecord.name.toUpperCase() as keyof typeof PCS])) {
    if (Object.values(PCS).includes(resultRecord.name.toUpperCase() as PCS)) {
      logger('red', resultRecord);
    } else {
      logger('green', resultRecord);
    }
  });
};
