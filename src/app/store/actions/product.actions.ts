import { Action } from '@ngrx/store';

import { IProduct } from '@models/Product';

export enum ProductActionsTypes {
  GetProduct = '[Product] Get Product',
  GetProductSuccess = '[Product] Get Product Success',
  GetAllProduct = '[AllProduct] Get All Product',
  GetAllProductSuccess = '[AllProduct] Get All Product Success'
}

export class GetAllProduct implements Action {
  public readonly type = ProductActionsTypes.GetAllProduct;
}

export class GetAllProductSuccess implements Action {
  public readonly type = ProductActionsTypes.GetAllProductSuccess;

  constructor(public payload: IProduct[]) {}
}

export class GetProduct implements Action {
  public readonly type = ProductActionsTypes.GetProduct;

  constructor(public payload: string) {}
}

export class GetProductSuccess implements Action {
  public readonly type = ProductActionsTypes.GetProductSuccess;

  constructor(public payload: IProduct) {}
}


export type ProductActions = GetAllProduct | GetProduct | GetAllProductSuccess | GetProductSuccess;
