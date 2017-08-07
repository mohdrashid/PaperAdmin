/**
 * Created by mohma on 7/26/2017.
 */
import { Component } from '@angular/core';
import {Ng2ListViewCRUDProperty} from "ng2-listview-crud";

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

  //Timeline Related
  public completeListener(item){
    console.log(item);
    return true;
  }
  public timelineData:Array<Object> =[
    {
      title:"Step 1",
      icon:'<i class="fa fa-home"></i>',
      content:"Hello World",
      complete:true
    },
    {
      title:"Step 2",
      icon:'<i class="fa fa-pencil"></i>',
      content:"Welcome World",
      complete:false
    }
  ];

  //News Component
  public newsList:Array<Object> =[
    {
      large:"30",
      small:"Jun",
      link:"http://www.aebiss.com",
      title:"AEBISS",
      content:"Fullstack development, IoT, Blockchain related services in the U.A.E"
    },
    {
      large:"1",
      small:"Jul",
      link:"http://www.tayar.ae",
      title:"Tayar",
      content:"One device that let you control any electrical device at home"
    },
    {
      large:"1",
      small:"Jul",
      link:"http://www.wavex.io",
      title:"WaveX",
      content:"Blockchain based electricity trading platform"
    }
  ]

  public listView:Ng2ListViewCRUDProperty= {
    add:true,//Adding possible
    remove:true,//Removing elements possible
    edit:true,//editing possible
    dataIsObject:true,
    path:["name","first"],
    label:"CRUD ListView",
    headingBackgroundColor:"#3752ff",
    headingFontColor:"#ececec",
    icon:"fa fa-cogs",
    onDelete:function(value){
      console.log("Deleting Value: "+JSON.stringify(value));
      return true;
    },
    onUpdate:function(value,newValue){
      console.log("Editing Value: "+JSON.stringify(value)+" New Value:"+newValue);
      return true;
    },
    onSearch:function(value){
      console.log(value)
    },
    onAdd:function(value){
      console.log("Adding Value: "+JSON.stringify(value));
      return true;
    },
    onSelect:function(value){
      console.log(JSON.stringify(value));
    },
    onSearchChange:function(value){
      console.log(value)
    }
  };

  //In this specific example the field name.first is displayed in the list
  public listItems:Array<Object>=
    [
      {name:{first:"Hello",last:"World"},count:2},
      {name:{first:"Hello2",last:"World"},count:2}
    ];

  constructor() {
    let self=this;
    setTimeout(function(){
      self.timelineData.push({
        title:"Step 3",
        icon:'<i class="fa fa-remove"></i>',
        content:"Bye World",
        complete:false
      });
    },5000);
  }

  public arraysListViewProperty:Ng2ListViewCRUDProperty= {
    add:true,//Adding possible
    remove:true,//Removing elements possible
    edit:true,//editing possible
    dataIsObject:false,
    path:[],
    label:"CRUD ListView with Arrays",
    headingBackgroundColor:"#3752ff",
    headingFontColor:"#ececec",
    icon:"fa fa-cogs",
    onDelete:function(value){
      console.log("Deleting Value: "+JSON.stringify(value));
      return true;
    },
    onUpdate:function(value,newValue){
      console.log("Editing Value: "+JSON.stringify(value)+" New Value:"+newValue);
      return true;
    },
    onSearch:function(value){
      console.log(value)
    },
    onAdd:function(value){
      console.log("Adding Value: "+JSON.stringify(value));
      return true;
    },
    onSelect:function(value){
      console.log(JSON.stringify(value));
    },
    onSearchChange:function(value){
      console.log(value)
    }
  };

  //In this specific example the field name.first is displayed in the list
  public crudArray:Array<Object>=
    [
      "Apple","Orange","Banana"
    ];
}


