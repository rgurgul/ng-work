import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IMenu, MenuComponent, MyLibComponent } from '../../../my-lib/src/public-api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyLibComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'web';
  menus:IMenu[] = [
    {path:'pages/items', name:'items'},
    {path:'pages/workers', name:'workers'},
  ]
}
