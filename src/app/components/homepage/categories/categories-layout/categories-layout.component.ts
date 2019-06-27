import { Component, OnInit } from '@angular/core';

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
