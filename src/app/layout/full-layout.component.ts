import {Component} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html',
  styleUrls:['./full-layout.component.scss']
})
export class FullLayoutComponent{

  public toggleBarIcon:boolean=true;
  constructor(){

  }
  toggle():void{
    let self=this;
    setTimeout(()=>{
      self.toggleBarIcon=!self.toggleBarIcon;

    },500)
  }

}
