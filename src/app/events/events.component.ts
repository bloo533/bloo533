import { Component, OnInit } from '@angular/core';
import { Event } from '../models/event';
import { EventsService } from '../services/events.service';
import { EventComponent } from '../event/event.component';

@Component({
  selector: 'app-events',
  imports: [EventComponent],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent implements OnInit {
  events !: Event[]

  constructor(private eventsService: EventsService) { }

  ngOnInit(): void {
    this.events = this.eventsService.getEvents();
  }


}
