import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LoaderComponent, ProductComponent],
  exports: [LoaderComponent, ProductComponent]
})
export class SharedModule {}
