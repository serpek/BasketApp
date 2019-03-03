import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IProduct} from '@models/Product';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {AddItemToCart, CartActions} from '@app/store/actions/cart.actions';
import {ICart} from '@models/Cart';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input()
  products: IProduct[];
  @Output()
  selected: EventEmitter<string> = new EventEmitter();

  constructor(private router: Router, private _store: Store<any>) {
  }

  ngOnInit() {
  }

  goToProduct(productID: string) {
    this.router.navigate(['/shop/detail', productID]);
  }

  saveCartProduct(product: IProduct) {
    this._store.dispatch(new AddItemToCart(<ICart> {productId: product.ProductId, quantity: 1}));

  }
}
