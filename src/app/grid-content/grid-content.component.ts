import { Component, ViewChild, OnInit, AfterViewChecked, HostListener } from '@angular/core';

import { CardItemService } from '../service/card-item.service';
import { CardItem } from '../service/interface/cardItem';

import { ItemCountService } from '../service/item-count.service';

import { Subscription } from 'rxjs/Subscription';

declare var $:any;
declare var Math:any;

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

  subscription: Subscription;

  // 초기 loadItem Count...
  private loadItemCount: number = 10;

  // infinite Scroll 영역에 대한 설정
  private infiniteScrollDistance: number = 1;

  // getmore items

  private isUsingAboutGetMoreItems: boolean = false;

  constructor(private cardItemService: CardItemService, private itemCountService: ItemCountService) {

    // itemCount Subscription
    this.subscription = this.itemCountService.getCount().subscribe((value)=>{
      if(value === this.loadItemCount) {
        console.log('subscribe complete:::');
        this.calcPosition();
      }
    });

    // inti infiniteScroll distance
    this.infiniteScrollDistance = 0.6;
  }

  ngOnInit() {

    this.column = this.calculateColumn();
    this.initColumnPositionYArray();

    this.cardItemService.getCardItems(this.loadItemCount).then(cardItems => {
      this.cardItems = cardItems;
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

      const elem = document.getElementsByClassName('card-wrap')[index];
      const height = elem.clientHeight;

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

  /**
   * scroll
   */
  @HostListener('window:scroll')
  onScroll(): void {

  }

  getMaxScrollY(): number {
    const maxScrollY = $(document).height() - $(window).height();
    return maxScrollY;
  }

  isOverInfiniteScrollDistance(): boolean {
    const currentScrollY = window.pageYOffset;
    const maxScroll = this.getMaxScrollY();
    const currentDistance = parseFloat((currentScrollY / maxScroll).toFixed(2));

    const isOver =  this.infiniteScrollDistance < currentDistance;

    return isOver;
  }

  getMoreItems(): void {
    
  }
}
