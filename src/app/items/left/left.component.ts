import { Component, OnInit, HostBinding } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

 routes =[
     {name:"Dashboard", url:"dashboard"},
     {name:"Register",url:"register",
     inner:[
       {name:"Dashboard", url:"dashboard"},
     ]
     }
   ]

function (){
  alert(routes.name);
}
   @HostBinding('class.is-open')
  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }

}