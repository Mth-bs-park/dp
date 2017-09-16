import { Component, OnInit } from '@angular/core';

import { ProductService } from '../service/product.service';
import { Product } from '../service/interface/product';

import { CardItemService } from '../service/card-item.service';
import { CardItem } from '../service/interface/cardItem';


@Component({
  selector: 'app-grid-content',
  templateUrl: './grid-content.component.html',
  styleUrls: ['./grid-content.component.css']
})
export class GridContentComponent implements OnInit {

  // private products: Array<Product> = [];
  private cardItems: Array<CardItem> = [];

  // private width: number = 236;

  constructor(private cardItemService: CardItemService) { }

  ngOnInit() {
    // this.productService.getProducts().then((products)=>{
    //   // 이부분에서 card position 값 구하는 부분을 넣으면 될듯 하다...
    //   this.products = products;
    // });

    this.cardItemService.getCardItems(3).then(cardItems => {
      console.log(cardItems);

      this.cardItems = cardItems;
    });
  }
}
