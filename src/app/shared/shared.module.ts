import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import * as Services from './services/_index';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule
  ],
  exports: [],
  providers: [
    Services.ApiService
  ],
  bootstrap: []
})
export class SharedModule { }
