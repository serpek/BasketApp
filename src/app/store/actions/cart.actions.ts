import { Action } from '@ngrx/store';
import { IProduct } from '@models/Product';

export enum CartActionsTypes {
  AddItemToCart = '[Cart] Add Item to Cart',
  RemoveItemFromCart = '[Cart] Remove Item from Cart',
  GetCart = '[Cart] Get Cart',
  GetCartSuccess = '[Cart] Get Cart Success',
  SetCart = '[Cart] Set Cart',
  SetCartSuccess = '[Cart] Set Cart Success'
}

export class AddItemToCart implements Action {
  readonly type = CartActionsTypes.AddItemToCart;

  constructor(public payload: IProduct) {}
}

export class RemoveItemFromCart implements Action {
  readonly type = CartActionsTypes.RemoveItemFromCart;

  constructor(public payload: string) {}
}

export class GetCart implements Action {
  public readonly type = CartActionsTypes.GetCart;
  constructor(public payload: IProduct) {}
}

export class GetCartSuccess implements Action {
  public readonly type = CartActionsTypes.GetCartSuccess;

  constructor(public payload: IProduct[]) {}
}

export class SetCart implements Action {
  public readonly type = CartActionsTypes.SetCart;

  constructor(public payload: IProduct) {}
}

export class SetCartSuccess implements Action {
  public readonly type = CartActionsTypes.SetCartSuccess;

  constructor(public payload: IProduct) {}
}

export type CartActions = AddItemToCart | RemoveItemFromCart | GetCart | GetCartSuccess | SetCart | SetCartSuccess;
