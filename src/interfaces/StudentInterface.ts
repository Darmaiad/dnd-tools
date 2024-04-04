import { SCHOOLS } from '../enums/Schools';

export interface StudentInterface {
  school: SCHOOLS;
  name: string;
  house: string;
  arcana?: number;
  investigation?: number;
  acrobatics?: number;
  athletics?: number;
}
