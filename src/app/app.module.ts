import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NumberPairsModule } from './number-pairs/number-pairs.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NumberPairsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
