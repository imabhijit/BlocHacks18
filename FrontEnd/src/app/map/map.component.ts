import { Component, OnInit } from '@angular/core';
import {EventService} from "../services/event.service";
import {DonateEvent} from "../models/DonateEvent";
declare let L;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  zoom: number = 12;
  lat: number = 45.5017;
  lng: number = -73.5673;


  events: DonateEvent[];
  constructor( private eventSetvice: EventService) {
  }

  ngOnInit() {
    this.eventService.getAll().subscribe(
      (data => {this.events = data}),
      (err => {console.log(err)})
    );



}

}
