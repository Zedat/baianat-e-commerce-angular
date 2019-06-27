import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/**
 * Components
 */
import { NavComponent } from './components/homepage/nav/nav.component';
import { FooterComponent } from './components/homepage/footer/footer.component';
import { AppComponent } from './app.component';
import { HomepageModule } from './modules/homepage.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/**
 * Routing
 */
import { routing } from './app.routes';
import { ProductCardComponent } from './components/products/product-card/product-card.component';
import { ProductGridComponent } from './components/products/product-grid/product-grid.component';
import { ProductSearchComponent } from './components/products/product-search/product-search.component';
import { CategoriesListComponent } from './components/products/categories-list/categories-list.component';
import { ProductViewComponent } from './components/products/product-view/product-view.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    ProductCardComponent,
    ProductGridComponent,
    ProductSearchComponent,
    CategoriesListComponent,
    ProductViewComponent
  ],
  imports: [
    BrowserModule,
    HomepageModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
