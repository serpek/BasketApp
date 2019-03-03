import {Component, OnInit} from '@angular/core';
import {IAppState} from '@app/store/state/app.state';
import {select, Store} from '@ngrx/store';
import {GetProduct} from '@app/store/actions/product.actions';
import {ActivatedRoute, Router} from '@angular/router';
import {selectSelectedProducts} from '@app/store/selectors/product.selector';
import {IProduct} from '@models/Product';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  product$ = this._store.pipe(select(selectSelectedProducts));

  constructor(private _store: Store<IAppState>, private activatedRouter: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this._store.dispatch(new GetProduct(this.activatedRouter.snapshot.params.id));
  }

  goToProduct(productID: string) {
    this.router.navigate(['/shop/detail', productID]);
  }

  saveCartProduct(product: IProduct) {
  }
}
