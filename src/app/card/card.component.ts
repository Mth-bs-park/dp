import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../service/product';
@Component({
  selector: 'card-item',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() product: Product;

  constructor() { }

  ngOnInit() {

    console.log(this.product);

  }

}
