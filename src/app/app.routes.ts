import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '', redirectTo: 'homepage', pathMatch: 'full'
    },
    {
        path: 'homepage', component: HomepageComponent
    },
    {
        path: 'products', component: ProductsComponent 
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