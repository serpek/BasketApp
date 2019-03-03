import {RouterReducerState} from '@ngrx/router-store';

import {initialProductState, IProductState} from '@app/store/state/product.state';
import {IConfigState, initialConfigState} from '@app/store/state/config.state';
import {ICartState, initialCartState} from '@app/store/state/cart.state';

export interface IAppState {
  router?: RouterReducerState;
  products: IProductState;
  cart: ICartState;
  config: IConfigState;
}


export const initialAppState: IAppState = {
  products: initialProductState,
  cart: initialCartState,
  config: initialConfigState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
