import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

/**
 *  Components
 */
import { CarouselComponent } from 'src/app/components/homepage/carousel/carousel.component';
import { CategoryCardComponent } from 'src/app/components/homepage/categories/category-card/category-card.component';
import { CategoriesComponent } from 'src/app/components/homepage/categories/categories-layout/categories-layout.component';
import { HomepageLayoutComponent } from 'src/app/components/homepage/homepage-layout/homepage-layout.component';
import { CategoryService } from '../services/category.service';

@NgModule({
  declarations: [
    CarouselComponent,
    CategoryCardComponent,
    CategoriesComponent,
    HomepageLayoutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    CarouselComponent,
    CategoryCardComponent,
    CategoriesComponent,
    HomepageLayoutComponent
  ],
  providers: [
    CategoryService
  ]
})
export class HomepageModule { }
