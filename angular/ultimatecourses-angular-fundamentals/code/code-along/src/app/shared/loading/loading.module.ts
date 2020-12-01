import { ComponentsList } from './components/list';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    ...ComponentsList,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...ComponentsList,
  ]
})
export class LoadingModule {}
