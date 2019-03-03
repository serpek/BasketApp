import { Product } from '@models/Product';

export interface CartSummary {
  product: Product;
  quantity: number;
  totalPrice: number;
}
