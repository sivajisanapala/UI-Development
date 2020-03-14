import { Component, OnInit, Input, HostListener, Directive } from '@angular/core';
import { LeftComponent } from '../left/left.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  // @Directive({selector: "div[toggle_menu]"})


 @HostListener('click')
  click(){
    
    this.sideBar.toggle();

  }

  @Input() sideBar: LeftComponent;

 

}