import { Action } from '@ngrx/store';
import { IConfig } from '@models/Config';

export enum ConfigActionsTypes {
  GetConfig = '[Config] Get Config',
  GetConfigSuccess = '[Config] Get Config Success'
}

export class GetConfig implements Action {
  public readonly type = ConfigActionsTypes.GetConfig;
}

export class GetConfigSuccess implements Action {
  public readonly type = ConfigActionsTypes.GetConfigSuccess;

  constructor(public payload: IConfig) {}
}

export type ConfigActions = GetConfig | GetConfigSuccess;
