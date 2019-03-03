import { CartActions, CartActionsTypes } from '@app/store/actions/cart.actions';
import { ICartState, initialCartState } from '@app/store/state/cart.state';

export function cartReducers(state: ICartState = initialCartState, action: CartActions): ICartState {
  switch (action.type) {
    /*case CartActionsTypes.AddItemToCart: {
      return adapter.upsertOne(action.payload, state);
    }
    case CartActionsTypes.RemoveItemFromCart: {
      return adapter.removeOne(action.payload, state);
    }*/
    case CartActionsTypes.GetCartSuccess: {
      return {
        ...state,
        products: action.payload
      };
    }
    case CartActionsTypes.SetCartSuccess: {
      return {
        ...state,
        product: action.payload
      };
    }

    default:
      return state;
  }
}
