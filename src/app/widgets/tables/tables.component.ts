/**
 * Created by mohma on 7/26/2017.
 */
import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  templateUrl: './tables.html',
  selector:'widget-table',
  styleUrls:['./table.scss']
})
export class TableWidgetComponent{


  public successColor="#8ad919";
  public warningCOlor="#ffb53e";
  public dangerColor="#f9243f";
  public fontColor="#ececec";

  settings = {
    actions: {
      add: true,
      edit: true,
      delete: true
    },
    columns: {
      id: {
        title: 'ID',
        filter:false,
        editable:false
      },
      name: {
        title: 'Full Name',
        filter:true
      },
      username: {
        title: 'User Name',
        filter:true
      },
      email: {
        title: 'Email',
        filter:true
      }
    }
  };
  data = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz"
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv"
    },
    {
      id: 11,
      name: "Nicholas DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz"
    }
  ];

  constructor() {
  }


}


