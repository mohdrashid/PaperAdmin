import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {LocationStrategy, HashLocationStrategy, CommonModule, PathLocationStrategy} from '@angular/common';

import { AppComponent } from './app.component';

// Routing Module
import { AppRoutingModule } from './app.routing';
import { FullLayoutComponent} from './layout/full-layout.component';
import {BreadCrumb} from "./components/breadcrumb/breadcrumb.component";

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  declarations: [
    FullLayoutComponent,
AppComponent,BreadCrumb
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: PathLocationStrategy
  }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
