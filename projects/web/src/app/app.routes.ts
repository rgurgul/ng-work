import { Routes } from '@angular/router';
import { ItemsComponent } from './containers/items/items.component';
import { WorkersComponent } from './containers/workers/workers.component';
import { CartComponent } from './containers/cart/cart.component';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
    {
        path: 'pages', children: [
            { path: 'items', component: ItemsComponent },
            { path: 'workers', component: WorkersComponent },
            { path: 'cart', component: CartComponent },
            {
                path: 'flights',
                loadComponent: () =>
                    loadRemoteModule('mfe1', './Component').then((m) => m.AppComponent),
            },
        ]
    }
];
