import { Component } from '@angular/core';

@Component({
  selector: 'app-cart-menu',
  templateUrl: './cart-menu.component.html',
  styleUrls: ['./cart-menu.component.css']
})
export class CartMenuComponent {

  cart: Cart;

  constructor(private cartService: CartService) {
    this.cart = this.cartService.cart;
  }

}
