import { Image } from  './image';
import { User } from  './user';

export interface Product {
  id: number;
  image: Image;
  content: string;
  tag: Array<string>;

  user: User;
  pinCount: number;
}
