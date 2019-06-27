import { Component } from '@angular/core';
import { Cart, CartService, CartItem } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent {

  cart: Cart;

  constructor(private cartService: CartService) {
    this.cart = this.cartService.cart;
  }

  clearCart() {
    this.cartService.clearCart();
  }

  update(value, item: CartItem) {
    let res = value - item.count;
    if (res > 0) {
      for (let i = 0; i < res; i++) {
        this.cartService.addProduct(item.product);
      }
    } else if (res < 0) {
      for (let i = 0; i < res; i++ ) {
        this.cartService.removeProduct(item.product);
      }
    }
    return value;
  }

}
