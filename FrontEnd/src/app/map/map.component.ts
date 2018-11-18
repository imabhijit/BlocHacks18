import { Component, OnInit } from '@angular/core';
declare let L;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  constructor() {

  }

  ngOnInit() {
      const map = L.map('map').setView([45.5017, -73.5673], 11);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      var myIcon = L.icon({
        iconUrl: 'favicon.ico',
        iconSize: [20, 20]
      });
      L.marker( [ 45.5017, -73.5673],{icon:myIcon}).addTo(map);

      // function makeMarkers(array) {
      //   for (var i = 0; i < array.length; i++) {
      //     if(!torchArr[i].lat & !array[i].lng){
      //       continue;
      //     }
      //     markers[i] = L.marker( [ array[i].lat, array[i].lng],{icon:myIcon}).addTo(map);
      //     markers[i].bindPopup("<p>" + array[i].name+"</p> <p>" + torchArr[i].email+ "</p><p> "+ torchArr[i].tel +"</p>").openPopup();

      //   }
      // }
    }
}

