import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgmCommonModule } from '@ngm/common';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgmCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
