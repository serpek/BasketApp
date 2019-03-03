import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IProduct, Product } from '@models/Product';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<any | Product[]> {
    return this.httpClient
      .cache()
      .get('/ProductCollection?_page=1&_limit=6')
      .pipe(
        map((products: Product[]) => {
          return products;
        }),
        catchError(() => of('Error, could not load products!'))
      );
  }

  getProduct(productId: string): Observable<any | Product> {
    return this.httpClient
      .cache()
      .get(`/ProductCollection?ProductId=${productId}`)
      .pipe(
        map((product: Product[]) => {
          return product[0];
        }),
        catchError(() => of('Error, could not load product Item!'))
      );
  }
}
