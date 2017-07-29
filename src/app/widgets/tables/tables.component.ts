/**
 * Created by mohma on 7/26/2017.
 */
import { Component } from '@angular/core';
import {ListView} from "../../components/listviewCRUD/listviewCRUD";

@Component({
  templateUrl: './tables.html',
  selector:'widget-table'
})
export class TableWidgetComponent {

  public successColor="#8ad919";
  public warningCOlor="#ffb53e";
  public dangerColor="#f9243f";
  public fontColor="#ececec";



  constructor() {
  }
}


