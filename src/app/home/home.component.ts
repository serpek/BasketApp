import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { Product } from '@models/Product';
import { ShopService } from '@app/shop/services/shop.service';
import { Router } from '@angular/router';
import { CartService } from '@app/shop/services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isLoading: boolean;
  products: Product[];

  constructor(private cartService: CartService, private shopService: ShopService, private router: Router) {}

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

  goToProduct(productID: string) {
    this.router.navigate(['/shop/detail', productID]);
  }
}
