import { Component, OnInit } from '@angular/core';
import {EventService} from "../services/event.service";
import {DonateEvent} from "../models/DonateEvent";
import { Marker } from '../models/Marker';
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

   marker: Marker[] = [{lat: 45.4812,lng: -73.6949,icon:"assets/bank.ico", name:"Moisson Montréal",location:"6880, Ch. de la Côte-de-Liesse Montreal, QC H4T 2A1",tel:"514 344 4494",website:"https://www.moissonmontreal.org/en/",email:"https://www.moissonmontreal.org/en/",hours:"7:00-16:00"},
                      {lat: 45.5500,lng: -73.6497,icon:"assets/bank.ico", name:"LOeuvre des Samaritains",location:"9413 Lajeunesse Montreal, QC H2M 1S5",tel:"514 388 4095",website:"http://www.lessamaritains.com/",email:"lds@live.ca",hours:"13:15-17:00"},
                      {lat: 45.5034,lng: -73.7804,icon:"assets/bank.ico", name:"On Rock",location:"9554 Gouin West, Pierrefonds, QC H8Y 1R3",tel:"514 696 1905",website:"http://www.onrock.org/",email:"onrock@onrock.org",hours: "10:00-18:30"},
                      {lat: 45.4941,lng: -73.5781, icon:"assets/bank.ico",name:"The Refugee Center",location:"402-1610 Saint Catherine West Montreal, QC H3H 2S2",tel:"514 846 0005",website:"https://www.therefugeecentre.org/",email:"info@therefugeecentre.org",hours:"10:00-17:00"},
                      {lat: 45.4931,lng: -73.6489,icon:"assets/bank.ico", name:"MADA Center",location:"6875,  Décarie Montreal, QC H3W 3E4",tel:"514 342 4969",website:"https://www.madacenter.com",email:"mada@madacenter.com",hours:"10:00-17:00"}]

  ngOnInit() {
    this.eventService.getAll().subscribe(data => {
      this.events = data;

      console.log(this.events);
    },
      err => {
        console.log(err);
      });
}

}
