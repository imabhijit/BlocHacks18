import { Component, OnInit } from '@angular/core';
import { DonateEvent } from '../models/DonateEvent';
import { EventService } from '../services/event.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  eventData: any = {};
  donateEvent: DonateEvent;


  constructor(private eventService: EventService) {
  }

  ngOnInit() {
  }

  submit() {
    this.donateEvent = this.eventData as DonateEvent;
    this.eventService.create(this.donateEvent).subscribe();
    this.refresh();
  }

  cancel() {
    this.refresh();
  }

  refresh() {
    window.location.reload();
  }

}
