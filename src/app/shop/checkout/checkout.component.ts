import { Component, OnInit } from '@angular/core';
import { CartService } from '@app/shop/services/cart.service';
import { IConfig } from '@models/Config';
import { CartItem } from '@models/Cart';
import { forkJoin, Subscription } from 'rxjs';
import { ConfigService } from '@app/core/config.service';
import { ShopService } from '@app/shop/services/shop.service';
import { Product } from '@models/Product';
import { CartSummary } from '@models/CartSummary';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckOutComponent implements OnInit {
  config: IConfig = null;
  cart: CartItem[] = null;
  cartSummary: CartSummary[] = [];
  grandTotalPrice = 0;
  private subscription = new Subscription();

  constructor(
    private configService: ConfigService,
    private cartService: CartService,
    private shopService: ShopService
  ) {}

  ngOnInit() {
    this.subscription.add(
      this.configService.ConfigReady.subscribe(config => {
        this.config = config;
      })
    );

    this.subscription.add(
      this.cartService.$Cart().subscribe(cart => {
        this.cart = cart;
        const promiseList: any[] = [];
        this.cartSummary = [];
        this.grandTotalPrice = 0;

        this.cart.forEach(item => {
          const p = this.shopService.getProduct(item.productId);
          promiseList.push(p);
        });

        if (promiseList.length) {
          const $forkJoin = forkJoin(promiseList).toPromise();

          $forkJoin.then((products: Product[]) => {
            products.forEach(item => {
              const cartItem: CartItem = this.cart.find(c => {
                return item.ProductId === c.productId;
              });
              const summary: CartSummary = <CartSummary>{
                product: item,
                quantity: cartItem.quantity,
                totalPrice: item.Price * cartItem.quantity
              };
              this.cartSummary.push(summary);
              this.grandTotalPrice += summary.totalPrice;
            });
          });
          $forkJoin.catch(error => {});
        }
      })
    );
  }

  updateCartItem(ProductId: string, quantity: number) {
    this.cartService.addToBasket(ProductId, quantity);
  }

  removeCartItem(ProductId: string) {
    this.cartService.removeFromBasket(ProductId);
  }
}
