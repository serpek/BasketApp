import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from '@models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {
  @Input()
  product: IProduct;

  @Output()
  addToCart: EventEmitter<IProduct> = new EventEmitter<IProduct>();
  @Output()
  goToDetail: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}
}
