export interface ICart {
  productId: string;
  quantity: number;
}

export class CartItem implements ICart {
  productId: string;
  quantity: number;

  constructor(data?: ICart) {
    Object.assign(this, data);
  }
}
