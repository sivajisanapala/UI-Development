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

 templiteral = `
  var name = 'Your name is \$\{first\} \$\{last\}.'
  `
destructuring = `
const name = user.name;
const age = user.age;

Now it has become => const{name,age}= user;
`
  dupfilter = `
      var arr =[1,1,1,2,2,2,3,3,3,3,4,4,6,7,9, "john", "john"];

      uniqueArray1 = [...new Set(arr)] or Array.form(new Set(arr));
      
      uniqueArray2 = arr.filter(function(i, a){
        return arr.indexOf(i) === a;
      })
      or
      uniqueArray2 = arr.filter((item,index)=> array.indexOf(item)===index);

      uniqueArray3 = arr.reduce((unique, item)=> unique.includes(item)? unique:[...unique,item],[]);
      `

  arrayobjsort = `
    $(document).ready(function() {
        var MyData = [
            { id : 1, name: "Angel Miguel",   city: "Nex Mexico" },
            { id : 2, name: "Michael Rogers", city: "Bogotá"     },				
            { id : 3, name: "Steve Rogers",   city: "New York"   },
            { id : 4, name: "Ángel José",     city: "Bucaramanga"},
            { id : 5, name: "Carlos Delgado", city: "Nex Mexico" },
            { id : 6, name: "Jhonny Zapata",  city: "Zacatecas"  },
            { id : 7, name: "Bruce Wayne",    city: "Gotham"     },
            { id : 8, name: "Speedy Gonzales",city: "Nex Mexico" }
          ];

        /*** Function to sort alphabetically an array of objects by some specific key.			 
         * * @param {String} property Key of the object to sort.
         * */
         
         function dynamicSort(property) {
           var sortOrder = 1;
           
          if(property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
            alert(property[0]);
          }
          
          return function (a,b) {
            if(sortOrder == -1){
              return b[property].localeCompare(a[property]);
              }else{
                return a[property].localeCompare(b[property]);
              } 
            }
          }
          
      // Sort the MyData array with the custom function that sorts alphabetically by the name key
      MyData.sort(dynamicSort("city"));
      
      // Display data with new order !
        console.log(MyData);});
  `
}