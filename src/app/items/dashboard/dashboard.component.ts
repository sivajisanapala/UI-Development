import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

items =[
    {url:'angularBlocks', name:'Building Blocks'},
    {url:'forms', name:'Forms'},
    {url:'routing', name:'Routing'},
    {url:'componentcommunication', name:'Components Interaction'},
    {url:'api', name:'API consumption'},
    {url:'typescript', name:'TypreScript'},
    {url:'javascript', name:'JavaScript'},
    {url:'html', name:'HTML5'},
    {url:'css', name:'CSS3'},
    {url:'bootstrap', name:'Bootstrap'},
    {url:'ajax', name:'AJAX'},
    {url:'npm', name:'Package Managers'}
  ]
}