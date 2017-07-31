import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {LocationStrategy, CommonModule, HashLocationStrategy} from '@angular/common';

import { AppComponent } from './app.component';

// Routing Module
import { AppRoutingModule } from './app.routing';
import { FullLayoutComponent} from './layout/full-layout.component';
import {Ng2AutoBreadCrumb} from "ng2-auto-breadcrumb";
import {Ng2NewsListComponent} from "./components/ng2-newslist/ng2newslist.component";


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    Ng2AutoBreadCrumb
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
