import { IConfigState, initialConfigState } from '@app/store/state/config.state';
import { ConfigActions, ConfigActionsTypes } from '@app/store/actions/config.actions';

export function configReducers(state: IConfigState = initialConfigState, action: ConfigActions): IConfigState {
  switch (action.type) {
    case ConfigActionsTypes.GetConfigSuccess: {
      return {
        ...state,
        config: action.payload
      };
    }

    default:
      return state;
  }
}
