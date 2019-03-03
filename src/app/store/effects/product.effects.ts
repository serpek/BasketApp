import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import {
  ProductActionsTypes,
  GetProduct,
  GetProductSuccess, GetAllProductSuccess, GetAllProduct
} from '@app/store/actions/product.actions';
import { selectProductList } from '@app/store/selectors/product.selector';
import { ShopService } from '@app/shop/services/shop.service';
import { IProduct } from '@models/Product';
import {IAppState} from '@app/store/state/app.state';

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
  getAllProduct$ = this.actions$.pipe(
    ofType<GetAllProduct>(ProductActionsTypes.GetAllProduct),
    switchMap(() => this.shopService.getProducts()),
    switchMap((products: IProduct[]) => of(new GetAllProductSuccess(products)))
  );

  constructor(private shopService: ShopService, private actions$: Actions, private store: Store<IAppState>) {}
}
