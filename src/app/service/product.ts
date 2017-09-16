import { User } from  './user';

export class Product {
  id: number;
  image: string;
  content: string;
  tag: Array<string>;

  user: User;
  pinCount: number;
}
