// https://stackoverflow.com/a/53981706

import { SCHOOLS } from './Schools';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SCHOOL: SCHOOLS;
      DAY: string;
      TEST: string;
    }
  }
}
