import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

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
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
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
