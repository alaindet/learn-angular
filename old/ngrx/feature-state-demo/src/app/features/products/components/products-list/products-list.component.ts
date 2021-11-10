import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../../types';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent {

  @Input() products: Product[];
  @Output() selected = new EventEmitter<Product>();

  onSelect(product: Product): void {
    this.selected.emit(product);
  }
}
