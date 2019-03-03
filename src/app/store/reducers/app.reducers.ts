import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';

import { configReducers } from '@app/store/reducers/config.reducers';
import { IAppState } from '@app/store/state/app.state';
import { productReducers } from '@app/store/reducers/product.reducers';
import { cartReducers } from '@app/store/reducers/cart.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  products: productReducers,
  cart: cartReducers,
  config: configReducers
};
