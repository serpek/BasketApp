import { Component, OnInit } from '@angular/core';
import { Product } from '@models/Product';
import { finalize } from 'rxjs/operators';
import { ShopService } from '@app/shop/services/shop.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  isLoading: boolean;
  products: Product[];

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
