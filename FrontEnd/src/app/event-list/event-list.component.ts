import { Component, OnInit } from '@angular/core';
import {EventService} from '../services/event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  constructor( private eventService: EventService) {}

  ngOnInit() {
    this.eventService.getSpecificEvents().subscribe(
      (data => {this.events = data}),
      (err => {console.log(err)})
    );

  }

}
