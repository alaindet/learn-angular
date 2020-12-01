import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ToConsolePipe } from './shared/to-console.pipe';
import { FilterServersPipe } from './shared/filter-servers.pipe';
import { SortServersPipe } from './shared/sort-servers.pipe';
import { ReversePipe } from './shared/reverse.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ToConsolePipe,
    FilterServersPipe,
    SortServersPipe,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
