import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
/**
 *  Components
 */
import { ProductCardComponent } from '../components/products/product-card/product-card.component';
import { ProductGridComponent } from '../components/products/product-grid/product-grid.component';
import { ProductSearchComponent } from '../components/products/product-search/product-search.component';
import { ProductViewComponent } from '../components/products/product-view/product-view.component';
import { CategoriesListComponent } from '../components/products/categories-list/categories-list.component';
import { ProductsLayoutComponent } from '../components/products/products-layout/products-layout.component';
import { ProductService } from '../services/product.service';

@NgModule({
    declarations: [
        ProductCardComponent,
        ProductGridComponent,
        ProductSearchComponent,
        ProductViewComponent,
        CategoriesListComponent,
        ProductsLayoutComponent
    ],
    exports: [
        ProductCardComponent,
        ProductGridComponent,
        ProductSearchComponent,
        ProductViewComponent,
        CategoriesListComponent,
        ProductsLayoutComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule
    ],
    providers: [ 
        ProductService
    ]
})

export class ProductsModule {}