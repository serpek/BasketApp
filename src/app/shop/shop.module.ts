import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {SharedModule} from '@app/shared';
import {ShopRoutingModule} from '@app/shop/shop-routing.module';
import {ShopService} from '@app/shop/services/shop.service';
import {ShopComponent} from './shop.component';
import {ListComponent} from './list/list.component';
import {CheckOutComponent} from '@app/shop/checkout/checkout.component';
import {DetailComponent} from './detail/detail.component';

@NgModule({
  imports: [CommonModule, TranslateModule, SharedModule, ShopRoutingModule],
  declarations: [ShopComponent, ListComponent, CheckOutComponent, DetailComponent],
  providers: [ShopService]
})
export class ShopModule {
}
