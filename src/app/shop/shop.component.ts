import { Component, OnInit } from '@angular/core';

import { IAppState } from '@app/store/state/app.state';
import { select, Store } from '@ngrx/store';
import { selectProductList } from '@app/store/selectors/product.selector';
import {GetAllProduct} from '@app/store/actions/product.actions';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  isLoading: boolean;
  products$ = this._store.pipe(select(selectProductList));

  constructor(private _store: Store<IAppState>) {}

  ngOnInit() {
    this.isLoading = true;
    this._store.dispatch(new GetAllProduct());
    this.isLoading = false;
  }
}
