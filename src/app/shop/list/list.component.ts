import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from '@models/Product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input()
  products: IProduct[];
  @Output()
  selected: EventEmitter<string> = new EventEmitter();

  constructor(private router: Router) {}

  ngOnInit() {}

  goToProduct(productID: string) {
    this.router.navigate(['/shop/detail', productID]);
  }

  saveCartProduct(product: IProduct) {}
}
