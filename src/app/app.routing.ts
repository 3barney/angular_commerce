import { Routes, RouterModule } from '@angular/router';

import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  { path: '', component: ProductComponent },
  { path: 'products', component: ProductComponent },
  { path: 'cart', component: CartComponent   },
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(routes);
