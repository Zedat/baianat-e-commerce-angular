import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartMenuComponent } from '../components/cart/cart-menu/cart-menu.component';
import { CartViewComponent } from '../components/cart/cart-view/cart-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CartService } from '../services/cart.service';
import { CheckoutComponent } from '../components/checkout/checkout.component';

@NgModule({
  declarations: [
    CartMenuComponent,
    CartViewComponent,
    CheckoutComponent
  ],
  exports: [
    CartMenuComponent,
    CartViewComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [
    CartService
  ]
})
export class CartModule { }
