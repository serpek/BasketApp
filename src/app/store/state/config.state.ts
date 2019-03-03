import { IConfig } from '@models/Config';

export interface IConfigState {
  config: IConfig;
}

export const initialConfigState: IConfigState = {
  config: null
};
