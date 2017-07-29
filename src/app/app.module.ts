import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';

// Routing Module
import { AppRoutingModule } from './app.routing';
import { FullLayoutComponent } from './layout/full-layout.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule

  ],

  declarations: [
    FullLayoutComponent,
AppComponent
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
