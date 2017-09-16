import { Component, ViewChild, OnInit, AfterViewChecked, HostListener } from '@angular/core';

import { CardItemService } from '../service/card-item.service';
import { CardItem } from '../service/interface/cardItem';

declare var $:any;

@Component({
  selector: 'app-grid-content',
  templateUrl: './grid-content.component.html',
  styleUrls: ['./grid-content.component.css']
})
export class GridContentComponent implements OnInit {

  @ViewChild('content') content: any;
  private cardItems: Array<CardItem> = [];

  private cardWidth: number = 256;

  private _column: number = 0;
  private minColumn: number = 3;
  private columnPositionYArray: Array<number>;

  private isBeforeCalculatePosition = true;

  constructor(private cardItemService: CardItemService) { }

  ngOnInit() {

    this.column = this.calculateColumn();
    this.initColumnPositionYArray();

    this.cardItemService.getCardItems(10).then(cardItems => {
      console.log(cardItems);

      this.cardItems = cardItems;
      setTimeout(()=> {
        this.calcPosition();
      });
    });
  }

  ngAfterViewChecked() {

    if (this.isBeforeCalculatePosition) return;

    this.isBeforeCalculatePosition = true;
    const maxPosition = this.getMaxValue(this.columnPositionYArray);
    this.content.nativeElement.style.height = `${maxPosition}px`;

    var children = Array.from(this.content.nativeElement.children);

    setTimeout(()=> {
      children.map((node)=>{
        $(node).get(0).children[0].classList.add('animate');
      });
    });
  }

  set column(column) {
    this._column = column;
  }

  get column() {
    return this._column;
  }

  calculateColumn(): number {
    const width = window.innerWidth;
    let column = Math.floor(width / this.cardWidth);
    if (column < this.minColumn) column = this.minColumn;
    return column;
  }

  initColumnPositionYArray(): void {
    const column = this.column;
    this.columnPositionYArray = new Array(column).fill(0);
  }

  calcPosition(): void {

    this.cardItems.map((value, index)=> {
      const minValue = this.getMinValue(this.columnPositionYArray);
      const minIndex = this.columnPositionYArray.indexOf(minValue);

      const x = minIndex * this.cardWidth;
      const y = minValue;

      value.position = {
        x: x,
        y: y
      };

      const height = document.getElementsByClassName('card-wrap')[index].clientHeight;

      this.columnPositionYArray[minIndex] = y + height;
    });

    this.isBeforeCalculatePosition = false;
  }

  getMinValue(array): number {
    return Math.min(...array);
  }

  getMaxValue(array): number {
    return Math.max(...array);
  }

  /**
   * resize
   */
  @HostListener('window:resize')
  onResize(): void {
    if (this.column === this.calculateColumn()) return;
    this.column = this.calculateColumn();
    this.initColumnPositionYArray();
    this.calcPosition();
  }
}
