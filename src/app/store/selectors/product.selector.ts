import {createSelector} from '@ngrx/store';

import {IAppState} from '../state/app.state';
import {IProductState} from '@app/store/state/product.state';

const selectAllProduct = (state: IAppState) => state.products;

export const selectProductList =
  createSelector(selectAllProduct, (state: IProductState) => state.allProducts);
export const selectSelectedProducts =
  createSelector(selectAllProduct, (state: IProductState) => state.selectedProducts);
