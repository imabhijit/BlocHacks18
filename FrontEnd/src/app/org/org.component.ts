import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-org',
  templateUrl: './org.component.html',
  styleUrls: ['./org.component.css']
})
export class OrgComponent implements OnInit {

  date: Date;
  constructor() { this.date;}

  ngOnInit() {
  }

}
