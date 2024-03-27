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
    <ul class="">
      <li *ngFor="let menu of _menus">
        <a
          class=" px-2 py-3 bg-blue-200 block text-black uppercase"
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
