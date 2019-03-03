import { IProduct } from '@models/Product';

export interface CartSummary {
  product: IProduct;
  finalPrice?: number;
  quantity: number;
  totalPrice: number;
}
