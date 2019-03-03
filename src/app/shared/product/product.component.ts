import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '@models/Product';
import { CartItem } from '@models/Cart';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {
  @Input()
  product: Product;

  @Output()
  addToCart: EventEmitter<CartItem> = new EventEmitter<CartItem>();

  @Output()
  goToDetail: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}
}
