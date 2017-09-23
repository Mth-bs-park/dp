import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ItemCountService {

  constructor() { }

  private subject = new Subject<any>();
  private _count: number = 0;

  update(){
    this.subject.next(++this._count);
  }

  clear() {
    this._count = 0;
    this.subject.next();
  }

  getCount(): Observable<any> {
    return this.subject.asObservable();
  }
}
