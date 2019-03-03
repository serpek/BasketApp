import { Action } from '@ngrx/store';
import { IProduct } from '@models/Product';

export enum ProductActionsTypes {
  GetProduct = '[Product] Get Product',
  GetProductSuccess = '[Product] Get Product Success',
  GetProducts = '[Products] Get Products',
  GetProductsSuccess = '[Products] Get Products Success'
}

export class GetProduct implements Action {
  public readonly type = ProductActionsTypes.GetProduct;

  constructor(public payload: string) {}
}

export class GetProductSuccess implements Action {
  public readonly type = ProductActionsTypes.GetProductSuccess;

  constructor(public payload: IProduct) {}
}

export class GetProducts implements Action {
  public readonly type = ProductActionsTypes.GetProducts;
}

export class GetProductsSuccess implements Action {
  public readonly type = ProductActionsTypes.GetProductsSuccess;

  constructor(public payload: IProduct[]) {}
}

export type ProductActions = GetProducts | GetProduct | GetProductsSuccess | GetProductSuccess;
