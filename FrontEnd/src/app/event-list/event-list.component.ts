import { Component, OnInit } from '@angular/core';
import {EventService} from '../services/event.service';
import { Event } from '@angular/router/src/events';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events: Event[];
  constructor( private eventService: EventService) {}

  ngOnInit() {
    this.eventService.getByOrganization().subscribe
    (data => {
      this.events = data;
    },
      err =>{
        console.log(err);
      });
  }

}
