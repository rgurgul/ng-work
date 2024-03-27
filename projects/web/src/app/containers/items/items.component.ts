import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { DataGridComponent } from '../../../../../my-lib/src/public-api';
import { DataService, token } from '../../services/data.service';
import { MatButtonModule } from '@angular/material/button';
import { StoreCartService } from '../../services/store-cart.service';

class Test { }
@Component({
  selector: 'app-items',
  standalone: true,
  imports: [CommonModule, DataGridComponent, MatButtonModule],
  templateUrl: './items.component.html',
  styles: ``,
  providers: [
    { provide: token, useValue: 'https://api.debugger.pl/' },
    DataService
  ]
})
export class ItemsComponent {
  buyHandler(_t6: any) {
    this.cartStoreService.updateState(_t6)
  }
  dataService = inject(DataService);
  cartStoreService = inject(StoreCartService);
  data$ = this.dataService.data$;
  constructor() {
    this.dataService.fetch('items');
  }
}
