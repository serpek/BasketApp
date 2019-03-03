import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { ShopComponent } from '@app/shop/shop.component';
import { ListComponent } from '@app/shop/list/list.component';
import { CheckOutComponent } from '@app/shop/checkout/checkout.component';
import { DetailComponent } from '@app/shop/detail/detail.component';

const routes: Routes = [
  { path: '', component: ShopComponent, data: { title: extract('Mağaza') } },
  { path: 'list', component: ListComponent, data: { title: extract('Ürünler') } },
  { path: 'detail/:id', component: DetailComponent, data: { title: extract('Detay') } },
  { path: 'checkout', component: CheckOutComponent, data: { title: extract('Satın Al') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ShopRoutingModule {}
