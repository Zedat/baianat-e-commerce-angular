import { Component, OnInit } from '@angular/core';
import { Category, CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories-layout',
  templateUrl: './categories-layout.component.html',
  styleUrls: ['./categories-layout.component.css']
})
export class CategoriesComponent {

  cardCategories: Array<Category>;

  constructor(private categoryService: CategoryService) {
    this.cardCategories = this.categoryService.getCategories();
  }


  selectCategory(category: Category): void {
    console.log(`Selected Category: ${category.title}`);
  }

}
