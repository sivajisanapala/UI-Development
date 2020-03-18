import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
  styleUrls: ['./ajax.component.css']
})
export class AjaxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 jqueryajaxget = `
    $.ajax({
        type:'GET',
        url: "http://rest-service.guides.spring.io/greeting",
        success: function(order){
          $.each(order, function(i, order){
            $("#our_selector").append('<span> You have ordered :'+ order.name +'for RS:'+ order.drink + '</span>');
          });
        },
        error: function(){
          alert("Error Loading Orders");
        }
    });
`

 jqueryajaxpost = `

  
  $(".add-order").on('click', function(){
    var NewOrder = {[}
      name: $("#name").val(),
      drink: $("#drink").val()
    };
    
    $.ajax({
        type:'POST',
        url: "http://rest-service.guides.spring.io/greeting",
        data: NewOrder;
        success: function(NewOrder){
          $("#our_selector").append('<span> You have ordered :'+ order.name +'for RS:'+ order.price);s
        },
        error: function(){
          alert("Error posting Order");
        };
    });
  });  
`
}