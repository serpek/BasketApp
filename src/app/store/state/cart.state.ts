import {ICart} from '@models/Cart';

export interface ICartState {
  cartItems: ICart[];
}

export const initialCartState: ICartState = {
  cartItems: null
};
