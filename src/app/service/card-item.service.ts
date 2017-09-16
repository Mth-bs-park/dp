import { Injectable } from '@angular/core';
import { Product } from './interface/product';
import { Position } from './interface/position';
import { User } from './interface/user';
import { Image } from './interface/image';
import { CardItem } from './interface/cardItem';

@Injectable()
export class CardItemService {

  constructor() { }

  getCardItems(count): Promise<Array<CardItem>> {
    const cardItems: Array<CardItem> = this._makeCardItems(count);

    return Promise.resolve(cardItems);
  }

  _makeCardItems(count): Array<CardItem> {
    const result: Array<CardItem> = [];

    for (let i = 0; i < count; i++) {

      const product: Product = {
        id: i + 1,
        image: this._getRandomImage(),
        content: `${i}`,
        tag: [`${i}`],
        user: this._getRandomUser(),
        pinCount: this._getRandomPinCount()
      };

      result.push({
        product,
        position: null
      })
    }

    return result;
  }

  _getRandomImage(): Image {
    const imgArray: Array<Image> = [
      {
        url: 'https://i.pinimg.com/236x/43/62/fb/4362fb9570a68eec8b14acac228352f9.jpg',
        height: 258
      },
      {
        url: 'https://i.pinimg.com/236x/eb/f6/9d/ebf69d91dbd0c6ad3e939942ce43fbd6.jpg',
        height: 293
      },
      {
        url: 'https://i.pinimg.com/236x/43/71/f3/4371f32261ffa6208e1e3208a9b07181.jpg',
        height: 354
      },
      {
        url: 'https://i.pinimg.com/236x/bf/93/27/bf932766bb998827dc9e0b5cc86dcce8.jpg',
        height: 573
      },
      {
        url: 'https://i.pinimg.com/236x/93/ad/59/93ad59b8e50365bce10e5612411930cf.jpg',
        height: 314
      },
      {
        url:'https://i.pinimg.com/236x/51/5b/4e/515b4ecaaef188e9375d5f10516bafca.jpg',
        height: 354
      },
      {
        url:'https://i.pinimg.com/236x/60/9e/18/609e18441a12babdbac3997fde6a117e.jpg',
        height: 354
      },
      {
        url:'https://i.pinimg.com/236x/16/cc/3a/16cc3aa1b50e978edffabdff740763f8.jpg',
        height: 399
      },
      {
        url:'https://i.pinimg.com/236x/6e/49/e4/6e49e4c6e58c81d22f17cc415e65d5cc.jpg',
        height: 354
      },
      {
        url:'https://i.pinimg.com/236x/d5/74/f6/d574f68ab15bfc0de45cb2661a672094.jpg',
        height: 490
      },
      {
        url:'https://i.pinimg.com/236x/ee/8b/ac/ee8bac0add2dfb372f679687f58c0f8a.jpg',
        height: 353
      }
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
