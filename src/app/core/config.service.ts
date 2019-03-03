import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IConfig } from '@models/Config';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  constructor(private httpClient: HttpClient) {}

  getConfig(): Observable<any | IConfig> {
    return this.httpClient
      .cache()
      .get<IConfig>('/Config')
      .pipe(
        map((config: IConfig) => {
          return config;
        }),
        catchError(() => of('Error, could not load config!'))
      );
  }
}
