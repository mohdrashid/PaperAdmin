/**
 * Created by mohma on 7/27/2017.
 */
import {Component, Input} from "@angular/core";
import {NgFor} from "@angular/common";
import {ListView} from "./listviewCRUD";
declare let $:any;


@Component({
  templateUrl:'listviewCRUD.component.html',
  selector:'listviewCRUD',
  styleUrls: ['./listviewCRUD.scss']
})

export class ListViewCRUDComponent {
  public value:string="";
  public search:string="";
  public opType:string="Add";
  @Input('properties') listView:ListView={
    label:"CRUD ListView",
    color:"#3752ff",
    icon:"fa fa-cogs",
    onDelete:function(value){
      console.log("Deleting Value: "+value);
      return true;
    },
    onUpdate:function(value){
      console.log("Editing Value: "+value);
      return true;
    },
    onSearch:function(){},
    onAdd:function(value){
      console.log("Adding Value: "+value);
      return true;
    }
  };

  @Input('data') items:Array<any>=[
    "Hello Worlds"
  ];

  public subData:Array<any>;

  public selectedIndex:number;

  constructor(){
  }

  ngOnInit(){
    this.listView.icon+=" fa-fw";
    this.subData=this.items;

  }

  ngAfterViewInit() {
    let self=this;
    $('ul').on('click','li', function() {
      $('.selected').removeClass('selected');
      if ( $(this).hasClass('selected') ) {
        $(this).removeClass('selected');
      }
      else {
        self.selectedIndex=$(this).attr('id');
        $(this).addClass('selected');
      }
    });
  }


  onChangeListener($event){
    let self=this;
    if(this.search===""){
      this.subData=this.items;
      return;
    }
    let result=this.items.filter(function(lhs){
      return lhs.match(self.search);
    });
    this.subData=result;

  }

  append(value){
    this.items.push(value)
  }

  onAddClickListener() {
    if(this.opType==="Add"){
      if(this.listView.onAdd&&this.listView.onAdd(this.value)){
        this.append(this.value);
        this.value="";
      }
      else{
        console.log("Function onAdd not found");
      }
    }
    else if(this.value!==""&&this.opType==="Edit"){
      if(this.listView.onAdd&&this.listView.onUpdate(this.value)){
        this.items[this.selectedIndex]=this.value;
        this.value="";
        this.opType="Add";
      }
      else{
        console.log("Function onEdit not found");
      }
    }
  }

  onEditClickListener(index){
    this.selectedIndex=index;
    this.value=this.items[this.selectedIndex];
    this.opType="Edit";
  }

  delete(index){
    this.items.splice(index,1);
  }

  get(index){
    return this.items[index]
  }

  onDeleteClickListener(index){
    this.selectedIndex=index;
    if(this.listView.onDelete&&this.listView.onDelete(this.get(this.selectedIndex))){
      this.delete(this.selectedIndex);
    }
  }

}
