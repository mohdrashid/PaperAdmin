/**
 * Created by mohma on 7/26/2017.
 */
import { Component } from '@angular/core';
import {ListView} from "../../components/listviewCRUD/listviewCRUD";

@Component({
  templateUrl: './main.component.html',
  selector:'widget-main'
})
export class MainWidgetComponent {
  public successText="Successful";
  public warningText="Warning";
  public dangerText="Danger";

  public successColor="#8ad919";
  public warningCOlor="#ffb53e";
  public dangerColor="#f9243f";
  public fontColor="#ececec";

  public listView:ListView= {
    label: "CRUD ListView",
    icon: "fa fa-list",
    color: "#ffb53e",
    onDelete: function (value) {
      console.log("Deleting Value: " + value);
      return true;
    },
    onUpdate: function (value) {
      console.log("Editing Value: " + value);
      return true;
    },
    onSearch: function () {
    },
    onAdd: function (value) {
      console.log("Adding Value: " + value);
      return true;
    }
  };

  public listItems:Array<Object>=["Apple","Orange","Banana","Grapes"];

  constructor() {
  }
}


