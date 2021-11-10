import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../../types';

@Component({
  selector: 'app-selected-product',
  templateUrl: './selected-product.component.html',
  styleUrls: ['./selected-product.component.scss'],
})
export class SelectedProductComponent {

  @Input() product: Product;
  @Output() deselected = new EventEmitter<void>();

  onDeselect(): void {
    this.deselected.emit();
  }
}
