import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IMenu, MenuComponent, MyLibComponent } from '../../../my-lib/src/public-api';
import { MainComponent } from './layout/components/main/main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
