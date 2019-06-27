import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input() products: Array<Product>;
  @Output() addToCart: EventEmitter<Product> = new EventEmitter<Product>();

  setClasses(product: Product): Object {
    return {
      'card-danger': product.isSpecial,
      'card-inverse': product.isSpecial
    };
  }

  buy(product: Product): void {
    console.log(`You just bought ${product.title}`);
    this.addToCart.emit(product);
  }

}
