import { Injectable } from '@angular/core';
import { Store } from '../utils/store';
import { CartIDBService } from './idb-storage.service';
import { of, withLatestFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreCartService extends Store<any[]>{
  updateState(_t6: any) {
    of(_t6)
      .pipe(
        withLatestFrom(super.getState())
      )
      .subscribe(([val, state]) => {
        super.setState([...state, val])
      })
  }

  constructor(
    private cartIdbService: CartIDBService
  ) {
    super([])

    super.getState().subscribe((val: any) => {
      cartIdbService.update(val)
    })
  }
}
