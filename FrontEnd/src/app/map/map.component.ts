import { Component, OnInit } from '@angular/core';
import {EventService} from "../services/event.service";
import {DonateEvent} from "../models/DonateEvent";
import { Marker } from '../models/marker';
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
  constructor( private eventService: EventService) {
  }

   marker: Marker[] = [{lat: 45.4812,lng: -73.6949,icon:"assets/bank.ico", info:"Moisson Montréal"},
                      {lat: 45.5500,lng: -73.6497,icon:"assets/bank.ico", info:"LOeuvre des Samaritains"},
                      {lat: 45.5034,lng: -73.7804,icon:"assets/bank.ico", info:"On Rock"},
                      {lat: 45.4941,lng: -73.5781, icon:"assets/bank.ico",info:"The Refugee Center"},
                      {lat: 45.4931,lng: -73.6489,icon:"assets/bank.ico", info:"MADA Center"}]

  ngOnInit() {
    this.eventService.getAll().subscribe(
      (data => {this.events = data}),
      (err => {console.log(err)})
    );



}

}
