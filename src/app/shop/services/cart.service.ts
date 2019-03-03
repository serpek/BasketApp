import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItem } from '@models/Cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  get Carts(): CartItem[] {
    return this._cart.getValue();
  }

  set Carts(value: CartItem[]) {
    this._cart.next(value);
  }

  private _cart: BehaviorSubject<CartItem[]> = new BehaviorSubject([]);
  private _basketItems: CartItem[] = [];

  constructor() {
    const storage = localStorage.getItem('cart');
    if (storage) {
      const items: CartItem[] = JSON.parse(storage) as CartItem[];
      this._basketItems = items;
      this._cart.next(this._basketItems);
    }
  }

  $Cart(): Observable<CartItem[]> {
    return this._cart.asObservable();
  }

  addToBasket(id: string, quantity: number) {
    if (this._basketItems) {
      const product: CartItem = this._basketItems.find(item => item.productId === id);
      if (product) {
        product.quantity = quantity;
      } else {
        this._basketItems.push(new CartItem({ productId: id, quantity: quantity }));
      }
    } else {
      this._basketItems.push(new CartItem({ productId: id, quantity: quantity }));
    }
    this._cart.next(this._basketItems);
    localStorage.setItem('cart', JSON.stringify(this._basketItems));
  }

  removeFromBasket(id: string) {
    const products: CartItem[] = this._basketItems.filter(item => item.productId !== id);
    this._basketItems = products;
    this._cart.next(this._basketItems);
    localStorage.setItem('cart', JSON.stringify(this._basketItems));
  }
}
