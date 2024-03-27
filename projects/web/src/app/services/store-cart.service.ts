import { Injectable } from '@angular/core';
import { Store } from '../utils/store';
import { CartIDBService } from './idb-storage.service';
import { from, of, skip, withLatestFrom } from 'rxjs';

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

    super.getState()
      .pipe(
        skip(1)
      )
      .subscribe((val: any) => {
        cartIdbService.update(val)
      })

    from(cartIdbService.get()).subscribe((val: any) => {
      super.setState(val || []);
    })

  }
}
