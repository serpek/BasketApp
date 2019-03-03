import { initialProductState, IProductState } from '@app/store/state/product.state';
import { ProductActions, ProductActionsTypes } from '@app/store/actions/product.actions';

export function productReducers(state: IProductState = initialProductState, action: ProductActions): IProductState {
  switch (action.type) {
    case ProductActionsTypes.GetProductsSuccess: {
      return {
        ...state,
        products: action.payload
      };
    }
    case ProductActionsTypes.GetProductSuccess: {
      return {
        ...state,
        selectedProducts: action.payload
      };
    }

    default:
      return state;
  }
}
