import { Component, OnInit, Input, ViewChild, AfterViewChecked, AfterContentChecked} from '@angular/core';
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

  // TODO resize 통해서 계속적으로 불리는 문제가 있음 해당방법 변경해야 될듯하다.
  // 상위에서 item 에 변경값을 주면서 조작해야 할듯 함.
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked', this.item.product.id);
    if (!this.item.position) return;

    const position = this.item.position;
    const { x, y } = position;
    // console.log('position:::', x, y);

    // console.dir(this.test.nativeElement);
    this.test.nativeElement.style.visibility = '';
    this.test.nativeElement.style.transform = `translate(${x}px, ${y}px)`;
  }
  ngAfterViewChecked() {
    // console.log('ngAfterViewChecked');
    // setTimeout(() => {
    // });
  }
}
