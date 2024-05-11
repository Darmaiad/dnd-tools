// https://stackoverflow.com/a/53981706

import { SchoolStrings } from './Schools';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SCHOOL: SchoolStrings;
      DAY: string;
      TEST: string;
    }
  }
}
