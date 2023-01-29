import { MessageI } from '../interfaces/message-i';

export class Message implements MessageI {
  id!: number;
  owner!: string;
  createdDate!: Date;
  text!: string;
  idCanal!: number;
  constructor(obj?: Partial<Message>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}
