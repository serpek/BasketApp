import { RouterReducerState } from '@ngrx/router-store';
import { IProductState } from '@app/store/state/product.state';
import { IConfigState } from '@app/store/state/config.state';
import { ICartState } from '@app/store/state/cart.state';

export interface IAppState {
  router?: RouterReducerState;
  products: IProductState;
  cart: ICartState;
  config: IConfigState;
}
