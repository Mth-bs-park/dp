import { Component, OnInit } from '@angular/core';

import { ProductService } from '../service/product.service';
import { Product } from '../service/product';

@Component({
  selector: 'app-grid-content',
  templateUrl: './grid-content.component.html',
  styleUrls: ['./grid-content.component.css']
})
export class GridContentComponent implements OnInit {

  private products: Array<Product> = [];

  // private width: number = 236;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().then((products)=>{
      // 이부분에서 card position 값 구하는 부분을 넣으면 될듯 하다...
      this.products = products;
    });
  }

}
