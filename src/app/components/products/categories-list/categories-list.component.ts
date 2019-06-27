import { Component } from '@angular/core';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent {

  categories: Array<Category>;

  constructor(
    private router: Router,
    private categoryService: CategoryService) {
      this.categories = this.categoryService.getCategories();
    }

  filterProduct(category: Category) {
    this.router.navigate(
      ['/products'], 
      { queryParams: { category: category.id }}
    );
  }

  showAllProducts() {
    this.router.navigate(['/products']);
  }

}
