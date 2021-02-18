import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Product } from '../../types';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {

  id = 0;
  form: FormGroup;

  @Output() created = new EventEmitter<Product>();

  ngOnInit(): void {
    this.initForm();
  }

  onCreate(): void {
    if (this.form.valid) {
      const product = this.readProductFromForm();
      this.created.emit(product);
      this.form.reset();
    }
  }

  private initForm(): void {
    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
    });
  }

  private readProductFromForm(): Product {
    return {
      id: ++this.id,
      title: this.form.value.title,
    };
  }
}
