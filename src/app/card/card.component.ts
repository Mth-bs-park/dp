import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { CardItem } from '../service/interface/cardItem';
@Component({
  selector: 'card-item',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() item: CardItem;
  @ViewChild('test') test: any;

  constructor() { }

  ngOnInit() {

    console.log(this.item, this.test);

  }

}
