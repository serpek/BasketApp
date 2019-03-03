import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';

import {IAppState} from '@app/store/state/app.state';
import {selectCartList} from '@app/store/selectors/cart.selector';
import {GetCart} from '@app/store/actions/cart.actions';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckOutComponent implements OnInit {
  cart$ = this._store.pipe(select(selectCartList));

  constructor(private _store: Store<IAppState>) {
  }

  ngOnInit() {
    this._store.dispatch(new GetCart());
  }
}
