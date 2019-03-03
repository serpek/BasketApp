import {CartActions, CartActionsTypes} from '@app/store/actions/cart.actions';
import {ICartState, initialCartState} from '@app/store/state/cart.state';

export function cartReducers(state: ICartState = initialCartState, action: CartActions): ICartState {
  switch (action.type) {
    case CartActionsTypes.AddItemToCart: {
      return {
        ...state,
        cartItems: action.payload
      };
    }
    case CartActionsTypes.RemoveItemFromCart: {
      return {...state, cartItems: action.payload};
    }
    case CartActionsTypes.GetCartSuccess: {
      return {...state, cartItems: action.payload};
    }

    default:
      return state;
  }
}
