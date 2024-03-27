import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { IMenu, MenuComponent, MyLibComponent } from '../../../../../../my-lib/src/public-api';
import { RouterOutlet } from '@angular/router';
import { StoreCartService } from '../../../services/store-cart.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    RouterOutlet, MyLibComponent, MenuComponent,
    CommonModule
  ]
})
export class MainComponent {
  private breakpointObserver = inject(BreakpointObserver);
  cartStoreService = inject(StoreCartService);
  cart$: Observable<any> = this.cartStoreService.getState().pipe(map(({ length }: any[]) => length));
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  menus: IMenu[] = [
    { path: 'pages/items', name: 'items' },
    { path: 'pages/workers', name: 'workers' },
    { path: 'pages/cart', name: 'cart' },
    { path: 'pages/flights', name: 'flights' },
  ]
}
