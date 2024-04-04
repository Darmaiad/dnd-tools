import { writeFile } from 'fs';
import path from 'path';

import { StudentResultInterface } from '../interfaces/StudentResultInterface';

export const saver = (results: StudentResultInterface[], resultsPath: string): StudentResultInterface[] => {
  writeFile(path.resolve(__dirname, resultsPath), JSON.stringify(results, null, 2), (error) => {
    if (error) {
      console.log('An error has occurred ', error);
      return;
    }
    console.log('\nTest Saved Successfully');
  });

  return results;
};
