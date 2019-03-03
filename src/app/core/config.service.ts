import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IConfig } from '@models/Config';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  get Config(): IConfig {
    return this._config;
  }

  set Config(value: IConfig) {
    this._config = value;
  }

  ConfigReady: Observable<any> = null;

  private configReady = new BehaviorSubject<any>(<IConfig>{});
  private _config: IConfig = {};

  constructor(private httpClient: HttpClient) {
    this.ConfigReady = this.configReady.asObservable();
  }

  public setConfig(value: IConfig) {
    this.configReady.next(value);
  }

  public load() {
    return new Promise(resolve => {
      return this.httpClient
        .cache()
        .get<IConfig>('/Config')
        .pipe(
          finalize(() => {
            resolve();
          }),
          catchError(() => of('Error, could not load config!'))
        )
        .subscribe(config => {
          Object.assign(this._config, config);
          this.setConfig(this._config);
          console.log('Configuration loaded...........');
        });
    });
  }
}
