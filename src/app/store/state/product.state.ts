import { IProduct } from '@models/Product';

export interface IProductState {
  products: IProduct[];
  selectedProducts: IProduct;
}

export const initialProductState: IProductState = {
  products: null,
  selectedProducts: null
};
