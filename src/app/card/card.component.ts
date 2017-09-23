import { Component, OnInit, Input, ViewChild, AfterViewChecked, AfterContentChecked} from '@angular/core';
import { CardItem } from '../service/interface/cardItem';
import { Position } from '../service/interface/position';
import { ItemCountService } from '../service/item-count.service';

@Component({
  selector: 'card-item',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

  @Input() item: CardItem;
  @ViewChild('wrap') wrap: any;
  private _previousPosition: Position;
  constructor(private itemCountService: ItemCountService) { }

  ngOnInit() {
    console.log("call card init");
    this.initPreviousPosition();
  }

  initPreviousPosition(): void {
    this.previousPosition = {
      x: -1,
      y: -1
    }
  }

  onLoad(): void {
    // console.log('subject update:::');
    this.itemCountService.update();
  }

  set previousPosition(position) {
    this._previousPosition = position;
  }

  get previousPosition(){
    return this._previousPosition;
  }

  // 상위에서 item 에 변경값을 주면서 조작해야 할듯 함.
  ngAfterViewChecked() {

    const position = this.item.position;

    if (this.isNull(position) || this.isEqualPreviousPosition(position)) return;

    const { x, y } = position;

    const elem = this.wrap.nativeElement;

    elem.style.visibility = '';
    elem.style.transform = `translate(${x}px, ${y}px)`;

    this.previousPosition = position;
  }

  isNull(position: Position): boolean {
    return position === null;
  }

  isEqualPreviousPosition(position: Position): boolean {

    const { x: previousX, y: previousY } = this.previousPosition;
    const { x, y } = this.item.position;

    return previousX === x && previousY === y;
  }
}
