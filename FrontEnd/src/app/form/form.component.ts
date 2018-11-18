import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  startDate: Date;
  endDate: Date;

  constructor() { 
    this.startDate; 
    this.endDate;
  }

  ngOnInit() {
  }

  submit(){
    console.log("form submitted");
  }

  cancel(){
    console.log("form cancelled");
  }

}
