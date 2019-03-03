import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { ICartState } from '@app/store/state/cart.state';

const selectCart = (state: IAppState) => state.cart;

export const selectCartList = createSelector(
  selectCart,
  (state: ICartState) => state.cartItems
);
