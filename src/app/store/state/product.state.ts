import { IProduct } from '@models/Product';

export interface IProductState {
  allProducts: IProduct[];
  selectedProducts: IProduct;
}

export const initialProductState: IProductState = {
  allProducts: null,
  selectedProducts: null
};
