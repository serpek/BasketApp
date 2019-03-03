import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { IProductState } from '@app/store/state/product.state';

const selectProducts = (state: IAppState) => state.products;

export const selectProductList = createSelector(
  selectProducts,
  (state: IProductState) => state.products
);
export const selectSelectedProducts = createSelector(
  selectProducts,
  (state: IProductState) => state.selectedProducts
);
