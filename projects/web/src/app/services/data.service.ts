import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, InjectionToken, inject } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { Store } from '../utils/store';

export const token: InjectionToken<string> = new InjectionToken('', {
  factory() {
    return 'http://localhost/'
  }
})

@Injectable({
  providedIn: 'root'
})
export class DataService extends Store<any[]>{

  data$ = super.getState();
  http = inject(HttpClient);

  constructor(
    @Inject(token) private token: string
  ) {
    super([]);
    /* super.getState().subscribe((val) => {
      console.log("*****",val);
    }) */
  }

  fetch(url: string): void {
    this.http.get(this.token + url)
      .pipe(
        map((result: any) => result.data),
        tap((val) => super.setState(val))
      ).subscribe();
  }
}
