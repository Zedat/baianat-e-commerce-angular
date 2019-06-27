import { Component } from '@angular/core';
import { Cart, CartService } from 'src/app/services/cart.service';

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
