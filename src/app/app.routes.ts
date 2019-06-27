import { Routes, RouterModule } from '@angular/router';
import { HomepageLayoutComponent } from './components/homepage/homepage-layout/homepage-layout.component';
import { ProductsLayoutComponent } from './components/products/products-layout/products-layout.component';
import { ProductViewComponent } from './components/products/product-view/product-view.component';
import { CartViewComponent } from './components/cart/cart-view/cart-view.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

const routes: Routes = [
    {
        path: '', redirectTo: 'homepage', pathMatch: 'full'
    },
    {
        path: 'homepage', component: HomepageLayoutComponent
    },
    {
        path: 'products', component: ProductsLayoutComponent 
    },
    {
        path: 'products/:id', component: ProductViewComponent
    },
    {
        path: 'cart', component: CartViewComponent
    },
    {
        path: 'checkout', component: CheckoutComponent
    }
];

export const routing = RouterModule.forRoot(routes);