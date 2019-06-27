import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/**
 * Components
 */
import { NavComponent } from './components/homepage/nav/nav.component';
import { FooterComponent } from './components/homepage/footer/footer.component';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/**
 *  Modules
 */
import { HomepageModule } from './modules/homepage.module';
import { ProductsModule } from './modules/products.module';
/**
 * Routing
 */
import { routing } from './app.routes';
import { CartMenuComponent } from './components/cart/cart-menu/cart-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    CartMenuComponent  
  ],
  imports: [
    BrowserModule,
    HomepageModule,
    ProductsModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
