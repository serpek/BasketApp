import { Component, Input, OnInit } from '@angular/core';
import { Product } from '@models/Product';
import { Router } from '@angular/router';
import { CartService } from '@app/shop/services/cart.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input()
  products: Product[];

  constructor(public cartService: CartService, private router: Router) {}

  ngOnInit() {}

  goToProduct(productID: string) {
    this.router.navigate(['/shop/detail', productID]);
  }
}
