import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor(public fb: FormBuilder) { }

  ngOnInit() {
  }

 cities: any = ['Florida', 'South Dakota', 'Tennessee', 'Michigan'];

  registrationForm = this.fb.group({
    cityName:['']
  })
 onSubmit(){
   alert(this.registrationForm.value)
 }
}