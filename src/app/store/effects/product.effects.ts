import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import { IAppState } from '../state/app.state';
import {
  ProductActionsTypes,
  GetProduct,
  GetProducts,
  GetProductsSuccess,
  GetProductSuccess
} from '@app/store/actions/product.actions';
import { selectProductList } from '@app/store/selectors/product.selector';
import { ShopService } from '@app/shop/services/shop.service';
import { IProduct } from '@models/Product';

@Injectable()
export class ProductEffects {
  @Effect()
  getProduct$ = this.actions$.pipe(
    ofType<GetProduct>(ProductActionsTypes.GetProduct),
    map(action => action.payload),
    withLatestFrom(this.store.pipe(select(selectProductList))),
    switchMap(([ProductId, products]) => {
      const selectedProduct = products.filter(product => product.ProductId === ProductId)[0];
      return of(new GetProductSuccess(selectedProduct));
    })
  );

  @Effect()
  getProducts$ = this.actions$.pipe(
    ofType<GetProducts>(ProductActionsTypes.GetProducts),
    switchMap(() => this.shopService.getProducts()),
    switchMap((product: IProduct[]) => of(new GetProductsSuccess(product)))
  );

  constructor(private shopService: ShopService, private actions$: Actions, private store: Store<IAppState>) {}
}
