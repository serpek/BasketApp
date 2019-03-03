import { IProduct } from '@models/Product';

export interface ICartState {
  product: IProduct;
  products: IProduct[];
}

export const initialCartState: ICartState = {
  product: null,
  products: null
};
