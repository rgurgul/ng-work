import { Injectable } from '@angular/core';
import { openDB, DBSchema, IDBPDatabase } from 'idb';

export interface ItemModel {
  id?: number;
  category: string;
  imgSrc: string;
  price: number;
  title: string;
}

export interface CartItemModel extends ItemModel {
  count: number;
}

enum Cart {
  DBName = 'CART_DB',
  ObjectStore = 'CART_ITEMS',
  ObjectKey = 'ITEMS',
}

interface CartDB extends DBSchema {
  [Cart.ObjectStore]: {
    key: string;
    value: CartItemModel[];
  };
}

@Injectable({
  providedIn: 'root',
})
export class CartIDBService {
  db!: IDBPDatabase<CartDB>;

  private async connectDB() {
    this.db = await openDB<CartDB>(Cart.DBName, 1, {
      upgrade(db, version) {
        db.createObjectStore(Cart.ObjectStore);
      },
    });
  }

  async get(): Promise<CartItemModel[] | undefined> {
    await this.connectDB();
    return this.db.get(Cart.ObjectStore, Cart.ObjectKey);
  }

  async update(payload = []): Promise<any> {
    await this.connectDB();
    return this.db.put(Cart.ObjectStore, payload, Cart.ObjectKey);
  }
}
