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
import { CartModule } from './modules/cart.module';

/**
 * Routing
 */
import { routing } from './app.routes';
import { CheckoutComponent } from './components/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    CheckoutComponent      
  ],
  imports: [
    BrowserModule,
    HomepageModule,
    ProductsModule,
    CartModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
