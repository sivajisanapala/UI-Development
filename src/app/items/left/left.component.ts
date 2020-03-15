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
     {name:"Register",url:"register"}
   ]

   @HostBinding('class.is-open')
  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }

}