import { Routes } from '@angular/router';
import { ItemsComponent } from './containers/items/items.component';
import { WorkersComponent } from './containers/workers/workers.component';

export const routes: Routes = [
    {
        path: 'pages', children: [
            { path: 'items', component: ItemsComponent },
            { path: 'workers', component: WorkersComponent },
        ]
    }
];
