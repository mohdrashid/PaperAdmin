import {Component, OnInit} from '@angular/core';
import { NavigationStart, Router} from "@angular/router";

@Component({
  selector: 'breadcrumb',
  templateUrl: './breadcrumb.component.html'
})
export class BreadCrumb implements OnInit{
  ngOnInit(): void {
    this.path=this.router.url.split("/");
    this.path.splice(0,1);
    this.href=this.path.map(function (value) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    });
    console.log(this.path)
  }


  public disabled: boolean = false;
  public status: {isopen: boolean} = {isopen: false};

  public path:Array<string>=[];
  public href:Array<string>=[];
  public router:Router;
  constructor(route: Router){
    this.router=route;

    route.events.forEach((event) => {
      if(event instanceof NavigationStart) {
        console.log(event)
        this.path=event.url.split("/");
        this.path.splice(0,1);
        this.href=this.path.map(function (value) {
          return value.charAt(0).toUpperCase() + value.slice(1);
        });
      }
      // NavigationEnd
      // NavigationCancel
      // NavigationError
      // RoutesRecognized
    });
  }

  route(index){
    console.log("route till"+index);
    let pathToGo="";
    for(let i=0;i<=index;i++){
      pathToGo+="/"+this.path[i];
    }
    console.log(pathToGo)
    this.router.navigate([pathToGo]);

  }
}
