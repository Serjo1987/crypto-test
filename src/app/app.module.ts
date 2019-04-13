import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

/* Import components */

import * as Components from './components/_index';

/* Import * from shared (services and etc) */

import * as Shared from './shared/_index';

/* Import modules */

import { ComponentsModule } from './components/components.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    Components.CryptoListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ComponentsModule,
    SharedModule
  ],
  providers: [
    Shared.ApiService
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
