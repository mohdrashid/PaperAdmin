/**
 * Created by mohma on 7/31/2017.
 */
import {Component, Input} from "@angular/core";
@Component({
  selector:'ng2-news-list',
  templateUrl:'./ng2newslist.component.html',
  styleUrls:['./ng2newslist.component.scss']
})
export class Ng2NewsListComponent{
  @Input('data') items:Array<Object>;
}
