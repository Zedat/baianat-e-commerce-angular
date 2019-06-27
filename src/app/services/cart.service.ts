import { Injectable } from '@angular/core';
import { Product } from '../products/product.service';

export interface CartItem {
  product: Product;
  count: number;
  amount: number;
}

export class Cart {
  count: number = 0;
  amount: number = 0;
  items: Array<CartItem> = [];
}

@Injectable()
export class CartService {

  cart: Cart = new Cart();

  /**
   * This method adds the new product or increase the number of the same
   * product in the cart.
   * It updates the amount and count of items in the cart.
   */
  addProduct(product: Product) {
    let item: CartItem = this.findItem(product.id);
    if (item) {
      item.count++ ;
      item.amount += product.price;
    } else {
      item = {
        product: product,
        count: 1,
        amount: product.price
      };
      this.cart.items.push(item);
    }
    this.cart.count++
    this.cart.amount += product.price;
    return item;
  }

  /**
   * This method decreases the number of the same products in the cart
   * or removes the last product.
   * It updates the amount and count of items in the cart.
   */
  removeProduct(product: Product) {
    let item: CartItem = this.findItem(product.id);
    if (item) {
      item.count--;
      item.amount -= product.price;
      if (!item.count) {
        this.remove(item);
        item = null;
      }
      this.cart.count--;
      this.cart.amount -= product.price;
    }
    return item;
  }

  /**
   * This method removes an item from the cart.
   * It updates the amount and the count of items in the cart.
   */
  removeItem(item: CartItem) {
    this.remove(item);
    this.cart.count -= item.count;
    this.cart.amount -= item.amount;
  }

  /**
   * This method returns a cart item by product id or null.
   */
  findItem(id: string): CartItem {
    for (let i = 0; i < this.cart.items.length; i++) {
      if (this.cart.items[i].product.id === id) {
        return this.cart.items[i];
      }
    }
    return null;
  }

  /**
   * This method remove all products and clean amount and items.
   */
  clearCart() {
    this.cart.items = [];
    this.cart.amount = 0;
    this.cart.count = 0;
  }

  /**
   * This method removes existing cart item.
   */
  private remove(item: CartItem) {
    let index: number = this.cart.items.indexOf(item);
    if (index !== -1) {
      this.cart.items.splice(index, 1);
    }
  }
}
