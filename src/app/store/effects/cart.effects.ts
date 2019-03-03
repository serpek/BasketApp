import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import { ShopService } from '@app/shop/services/shop.service';
import { CartActionsTypes, GetCart, GetCartSuccess } from '@app/store/actions/cart.actions';
import { selectCartList } from '@app/store/selectors/cart.selector';
import { IAppState } from '@app/store/state/app.state';

@Injectable()
export class CartEffects {
  @Effect()
  getCart$ = this.actions$.pipe(
    ofType<GetCart>(CartActionsTypes.GetCart),
    map(action => action.payload),
    withLatestFrom(this.store$.pipe(select(selectCartList))),
    switchMap(([product, products]) => of(new GetCartSuccess(products)))
  );

  constructor(private shopService: ShopService, private actions$: Actions, private store$: Store<IAppState>) {}
}
