import { Component } from '@angular/core';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent {

  product: Product;
  cartItem: CartItem;

  get quantity(): number {
    return this.cartItem ? this.cartItem.count : 0;
  }

  get amount(): number {
    return this.cartItem ? this.cartItem.amount : 0;
  }

  constructor(private route: ActivatedRoute,
              private productService: ProductService,
              private cartService: CartService) {
    this.route
        .params
        .subscribe(params => {
          let id: string = params['id'];
          this.product = this.productService.getProduct(id);
          this.cartItem = this.cartService.findItem(id);
        });
  }

  addToCart() {
    this.cartItem = this.cartService.addProduct(this.product);
  }

  removeFromCart() {
    this.cartItem = this.cartService.removeProduct(this.product);
  }

}
