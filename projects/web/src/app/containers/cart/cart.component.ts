import { Component, inject } from '@angular/core';
import { StoreCartService } from '../../services/store-cart.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <!-- {{cart$|async|json}} -->
    </div>
  `,
  styles: ``
})
export class CartComponent {

  storeCartService = inject(StoreCartService)
  //cart$: Observable<any[]> = this.storeCartService.getState();

}
