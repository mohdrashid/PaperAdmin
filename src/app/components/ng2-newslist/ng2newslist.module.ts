/**
 * Created by mohma on 7/31/2017.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Ng2NewsListComponent} from "./ng2newslist.component";
@NgModule({
  imports: [
    CommonModule
  ],
  declarations:[Ng2NewsListComponent],
  exports:[Ng2NewsListComponent]
})
export class Ng2NewsList{

}
