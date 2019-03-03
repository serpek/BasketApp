import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { IProduct, Product } from '@models/Product';
import { ShopService } from '@app/shop/services/shop.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isLoading: boolean;
  @Input() products: IProduct[];
  @Output() addToCart = new EventEmitter<IProduct>();

  constructor(private shopService: ShopService) {}

  ngOnInit() {
    this.isLoading = true;
    this.shopService
      .getProducts()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((products: Product[]) => {
        this.products = products;
      });
  }
}
