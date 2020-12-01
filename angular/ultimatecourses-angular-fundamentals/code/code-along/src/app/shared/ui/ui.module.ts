import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsList } from './components/list';

@NgModule({
  declarations: [
    ...ComponentsList
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...ComponentsList
  ]
})
export class UiModule {}
