import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { DataGridComponent } from '../../../../../my-lib/src/public-api';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [CommonModule, DataGridComponent],
  templateUrl: './items.component.html',
  styles: ``
})
export class ItemsComponent {

  private http = inject(HttpClient);

  public data$: Observable<any> = this.http.get('https://api.debugger.pl/items')
    .pipe(
      map((result: any) => result.data)
    );
}
