import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GameControlsComponent } from './components/game-controls/game-controls.component';
import { GameItemOddComponent } from './components/game-item-odd/game-item-odd.component';
import { GameItemEvenComponent } from './components/game-item-even/game-item-even.component';

@NgModule({
  declarations: [
    AppComponent,
    GameControlsComponent,
    GameItemOddComponent,
    GameItemEvenComponent,
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
