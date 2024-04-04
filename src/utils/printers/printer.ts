import { PCS } from '../../enums/Pcs';
import { logger } from '../logger';

export const printer = (results) =>
  results.forEach((resultRecord) => {
    if (Object.values(PCS).includes(resultRecord.name.toUpperCase())) {
      logger('red', resultRecord);
    } else {
      logger('green', resultRecord);
    }
  });
