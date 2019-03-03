import {Action} from '@ngrx/store';
import {ICart} from '@models/Cart';

export enum CartActionsTypes {
  AddItemToCart = '[Cart] Add Item to Cart',
  RemoveItemFromCart = '[Cart] Remove Item from Cart',
  GetCart = '[Cart] Get Cart',
  GetCartSuccess = '[Cart] Get Cart Success'
}

export class AddItemToCart implements Action {
  readonly type = CartActionsTypes.AddItemToCart;

  constructor(public payload: ICart) {
  }
}

export class RemoveItemFromCart implements Action {
  readonly type = CartActionsTypes.RemoveItemFromCart;

  constructor(public payload: ICart[]) {
  }
}

export class GetCart implements Action {
  public readonly type = CartActionsTypes.GetCart;
}

export class GetCartSuccess implements Action {
  public readonly type = CartActionsTypes.GetCartSuccess;

  constructor(public payload: ICart[]) {
  }
}

export type CartActions = AddItemToCart | RemoveItemFromCart | GetCart | GetCartSuccess;
