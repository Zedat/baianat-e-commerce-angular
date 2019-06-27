import { Component, Input } from '@angular/core';
import { Category } from 'src/app/services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css']
})
export class CategoryCardComponent {

  @Input() category: Category;

  constructor(private router: Router) {}

  filterProduct(category: Category) {
    this.router.navigate(
      ['/products'], 
      { queryParams: { category: category.id } }
    );
  }

}
