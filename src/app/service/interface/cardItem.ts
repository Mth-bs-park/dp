import { Product } from './product';
import { Position } from './position';

export interface CardItem {
  product: Product;
  position?: Position;
}
