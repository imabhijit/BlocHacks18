import { Component, OnInit } from '@angular/core';
import {EventService} from "../services/event.service";
import {Observable} from "rxjs";
import {DonateEvent} from "../models/DonateEvent";
import {forEach} from "@angular/router/src/utils/collection";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //temp:any = new Array();
  // events:DonateEvent[];
  constructor(private eventService: EventService) { }
  // this.eventService.getAll().subscribe((d)=>{
  //console.log(d);
  /// get all the keys of d
  // this.temp = Object.keys(d).keys();
  //for(let e of d)
  //this.temp.push(e.postalCode)
  // console.log(d[0].postalCode);
  // this.events = d;
  // console.log(this.events);



  ngOnInit() {
  }

}
