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

  events: DonateEvent[];
  constructor( private eventSetvice: EventService) {
  }
  ngOnInit() {
    this.eventService.getAll().subscribe(
      (data => {this.events = data}),
      (err => {console.log(err)})
    );

      const map = L.map('map').setView([45.5017, -73.5673], 11);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      var bankIcon = L.icon({
        iconUrl: 'assets/home.svg',
        iconSize: [20, 20]
      });
      var eventIcon = L.icon({
        iconUrl: 'assets/event.svg',
        iconSize: [20, 20]
      });
      L.marker( [ 45.5017, -73.5673],{icon:bankIcon}).addTo(map).bindPopup("<p>I'm a food bank</p>");
      L.marker( [45.4954, -73.5792],{icon:eventIcon}).addTo(map).bindPopup("<p>I'm an event</p>");

      // function makeBankMarkers(array) {
      //   for (var i = 0; i < array.length; i++) {
      //     if(!array[i].lat & !array[i].lng){
      //       continue;
      //     }
      //     markers[i] = L.marker( [ array[i].lat, array[i].lng],{icon:bankIcon}).addTo(map);
      //     markers[i].bindPopup("<p>" + array[i].name+"</p> <p>" + array[i].email+ "</p><p> "+ array[i].tel +"</p>");
      //
      //   }
      // }
      // function makeEventMarkers(array) {
      //   for (var i = 0; i < array.length; i++) {
      //     if(!array[i].lat & !array[i].lng){
      //       continue;
      //     }
      //     markers[i] = L.marker( [ array[i].lat, array[i].lng],{icon:eventIcon}).addTo(map);
      //     markers[i].bindPopup("<p>" + array[i].organizer+"</p> <p>" + array[i].location+ "</p><p> "+ array[i].time +"</p><p> "+ array[i].description +"</p>");
      //
      //   }
      // }
}

}
