import { LoadingModule } from './loading/loading.module';
import { UiModule } from './ui/ui.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    LoadingModule,
  ],
  exports: [
    CommonModule,
    UiModule,
    LoadingModule,
  ]
})
export class SharedModule {}
