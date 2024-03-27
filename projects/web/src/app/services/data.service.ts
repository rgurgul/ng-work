import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, InjectionToken, inject } from '@angular/core';
import { Observable, map } from 'rxjs';

export const token: InjectionToken<string> = new InjectionToken('', {
  factory() {
    return 'http://localhost/'
  }
})

@Injectable({
  providedIn: 'root'
})
export class DataService {

  http = inject(HttpClient);

  constructor(
    @Inject(token) private token: string
  ) {}

  fetch(url: string): Observable<any> {
    return this.http.get(this.token + url)
      .pipe(
        map((result: any) => result.data)
      );
  }
}
