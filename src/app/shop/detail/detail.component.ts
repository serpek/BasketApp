import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct, Product } from '@models/Product';
import { finalize } from 'rxjs/operators';
import { ShopService } from '@app/shop/services/shop.service';
import { CartService } from '@app/shop/services/cart.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  productId: string;
  isLoading: boolean;
  product: Product;

  constructor(
    private cartService: CartService,
    private shopService: ShopService,
    private activatedRouter: ActivatedRoute
  ) {
    this.productId = this.activatedRouter.snapshot.params.id;
  }

  ngOnInit() {
    this.isLoading = true;
    this.shopService
      .getProduct(this.productId)
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((product: Product) => {
        this.product = product;
      });
  }

  addToCart(product: IProduct) {}
}
