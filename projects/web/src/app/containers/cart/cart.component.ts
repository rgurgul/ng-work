import { Component, inject } from '@angular/core';
import { StoreCartService } from '../../services/store-cart.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { DataGridComponent } from '../../../../../my-lib/src/public-api';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, DataGridComponent, MatButtonModule],
  template: `
    <div>
      <app-data-grid [data]="cart$|async">
        <ng-template let-x>
          <tr>
            <td>{{x.title}}</td>
            <td>{{x.price}}</td>
            <td>
              <button mat-raised-button color="warn">+</button>
              <button mat-raised-button color="primary">-</button>
            </td>
          </tr>
        </ng-template>
      </app-data-grid>

    </div>
  `,
  styles: ``
})
export class CartComponent {

  storeCartService = inject(StoreCartService)
  cart$: Observable<any[]> = this.storeCartService.getState();

}
