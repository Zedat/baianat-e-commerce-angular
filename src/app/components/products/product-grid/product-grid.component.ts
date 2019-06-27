import { Component } from '@angular/core';
import { ProductService, Product } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent {

  products: any = [];

  constructor(
    private router: Router,
    private productService: ProductService,
    private cardService: CartService) {
    this.router
      .routerState
      .root
      .queryParams
      .subscribe(params => {
        let category: string = params['category'];
        let search: string = params['search'];
        let products: Array<Product> = 
          this.productService.getProducts(category, search);
        this.products = this.transform(products);
      })
    
  }

  transform(source: Array<Product>) {
    let index: number = 0;
    let length: number = source.length;

    let products: any = [];

    while (length) {
      let row: Array<Product> = [];
      if (length >= 3) {
        for (let i = 0; i < 3; i++) {
          row.push(source[index++]);
        }
        products.push(row);
        length -= 3;
      } else {
        for (; length > 0; length--) {
          row.push(source[index++]);
        }
        products.push(row);
      }
    }
    return products;
  }

  addToCart(product: Product) {
    this.cardService.addProduct(product);
  }

}
