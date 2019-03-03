import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectProductList } from '@app/store/selectors/product.selector';
import { IAppState } from '@app/store/state/app.state';
import { GetProducts } from '@app/store/actions/product.actions';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckOutComponent implements OnInit {
  cart$ = this._store.pipe(select(selectProductList));

  constructor(private _store: Store<IAppState>) {}

  ngOnInit() {
    this._store.dispatch(new GetProducts());
  }
}
