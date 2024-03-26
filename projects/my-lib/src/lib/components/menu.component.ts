import { NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export interface IMenu {
    path: string;
    name: string;
}

@Component({
    selector: 'lib-menu',
    template: `
  <nav>
    <ul class="flex space-x-2">
      <li *ngFor="let menu of _menus">
        <a
          class="rounded px-2 py-1 bg-blue-200"
          routerLinkActive="bg-blue-400"
          [routerLink]="menu.path">{{menu.name}}</a>
      </li>
    </ul>
  </nav>
  `,
    standalone: true,
    imports: [NgFor, RouterLink, RouterLinkActive]
})
export class MenuComponent implements OnInit {

    _menus!: IMenu[];

    @Input()
    set menus(menu: IMenu[]) {
        this._menus = menu;
    }
    constructor() { }

    ngOnInit(): void {
    }

}
