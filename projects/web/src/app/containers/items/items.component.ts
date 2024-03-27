import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { DataGridComponent } from '../../../../../my-lib/src/public-api';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { DataService, token } from '../../services/data.service';

class Test { }
@Component({
  selector: 'app-items',
  standalone: true,
  imports: [CommonModule, DataGridComponent],
  templateUrl: './items.component.html',
  styles: ``,
  providers: [
    { provide: token, useValue: 'https://api.debugger.pl/' },
    DataService
  ]
})
export class ItemsComponent {
  dataService = inject(DataService);
  data$ = this.dataService.fetch('items');
}
