import { Routes } from '@angular/router';
import { ItemsComponent } from './containers/items/items.component';
import { WorkersComponent } from './containers/workers/workers.component';
import { CartComponent } from './containers/cart/cart.component';

export const routes: Routes = [
    {
        path: 'pages', children: [
            { path: 'items', component: ItemsComponent },
            { path: 'workers', component: WorkersComponent },
            { path: 'cart', component: CartComponent },
        ]
    }
];
