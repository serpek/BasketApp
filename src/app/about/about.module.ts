import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  imports: [CommonModule, TranslateModule, AboutRoutingModule],
  declarations: [AboutComponent, ProductDetailComponent]
})
export class AboutModule {}
