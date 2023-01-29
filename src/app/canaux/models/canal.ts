import { CanalI } from '../interfaces/canal-i';

export class Canal implements CanalI {
  id!: number;
  name!: string;
  date!: Date;
  user!: string;
  constructor(obj?: Partial<Canal>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}
