import { Injectable } from '@angular/core';
import { Product } from './product';
import { User } from './user';

import 'rxjs/add/operator/toPromise';
@Injectable()
export class ProductService {

  constructor() { }

  getProducts(): Promise<Array<Product>> {
    const products: Array<Product> = this._makeProduct();

    return Promise.resolve(products);
  }

  _makeProduct(): Array<Product> {

    let result: Array<Product> = [];

    for (var i = 0; i < 20; i++){

      result.push({
        id: i + 1,
        image: this._getRandomImage(),
        content: `${i}`,
        tag: [`${i}`],
        user: this._getRandomUser(),
        pinCount: this._getRandomPinCount()
      });
    }

    return result;
  }

  _getRandomImage(): string {
    const imgArray: Array<string> = [
      'https://i.pinimg.com/236x/43/62/fb/4362fb9570a68eec8b14acac228352f9.jpg',
      'https://i.pinimg.com/236x/eb/f6/9d/ebf69d91dbd0c6ad3e939942ce43fbd6.jpg',
      'https://i.pinimg.com/236x/43/71/f3/4371f32261ffa6208e1e3208a9b07181.jpg',
      'https://i.pinimg.com/236x/bf/93/27/bf932766bb998827dc9e0b5cc86dcce8.jpg',
      'https://i.pinimg.com/236x/93/ad/59/93ad59b8e50365bce10e5612411930cf.jpg',
      'https://i.pinimg.com/236x/51/5b/4e/515b4ecaaef188e9375d5f10516bafca.jpg',
      'https://i.pinimg.com/236x/60/9e/18/609e18441a12babdbac3997fde6a117e.jpg',
      'https://i.pinimg.com/236x/16/cc/3a/16cc3aa1b50e978edffabdff740763f8.jpg',
      'https://i.pinimg.com/236x/6e/49/e4/6e49e4c6e58c81d22f17cc415e65d5cc.jpg',
      'https://i.pinimg.com/236x/d5/74/f6/d574f68ab15bfc0de45cb2661a672094.jpg',
      'https://i.pinimg.com/236x/ee/8b/ac/ee8bac0add2dfb372f679687f58c0f8a.jpg'
    ];

    const length = imgArray.length;
    const randomIndex = this._getRandomNumber(length);

    return imgArray[randomIndex];
  }

  _getRandomUser(): User {

    const user = [
      {userName: 'AAA', userId: 'AAA', img: 'https://s.pinimg.com/images/user/default_30.png'},
      {userName: 'BBB', userId: 'BBB', img: 'https://s.pinimg.com/images/user/default_30.png'},
      {userName: 'CCC', userId: 'CCC', img: 'https://s.pinimg.com/images/user/default_30.png'},
      {userName: 'DDD', userId: 'DDD', img: 'https://s.pinimg.com/images/user/default_30.png'},
    ];

    const randomIndex = this._getRandomNumber(user.length);
    return user[randomIndex];
  }

  _getRandomPinCount(): number {
    return this._getRandomNumber(5000) + 500;
  }

  _getRandomNumber(max): number {
    return Math.floor(Math.random() * max);
  }
}
