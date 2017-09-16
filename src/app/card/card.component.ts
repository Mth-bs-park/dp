import { Component, OnInit, Input, ViewChild, AfterViewChecked} from '@angular/core';
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

  ngOnInit() {}

  ngAfterViewChecked() {

    if (!this.item.position) return;
    const position = this.item.position;
    const { x, y } = position;
    // console.log('position:::', x, y);

    this.test.nativeElement.style.visibility = '';
    this.test.nativeElement.style.transform = `translate(${x}px, ${y}px)`;
  }
}
