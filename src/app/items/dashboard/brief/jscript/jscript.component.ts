import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jscript',
  templateUrl: './jscript.component.html',
  styleUrls: ['./jscript.component.css']
})
export class JscriptComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  dupfilter = `
      var arr =[1,1,1,2,2,2,3,3,3,3,4,4,6,7,9, "john", "john"];
       uniqueArray = arr.filter(function(i, a){
				return arr.indexOf(i) == a;
      })
      uniqueArray1 = [...new Set(arr)];
      document.querySelector("#farray").innerHTML = uniqueArray1;`

}