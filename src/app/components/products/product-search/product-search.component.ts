import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent {

  disabled: boolean = true;

  constructor(private router: Router) { }

  searchChanged(value: string) {
    if (value) {
      this.disabled = false;
    } else {
      this.disabled = true;
    }
  }

  searchProduct(value: string) {
    this.router.navigate(
      ['/products'], 
      { queryParams: {search: value} }
    );
  }

}
