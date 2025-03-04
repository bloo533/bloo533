import { Component, Input } from '@angular/core';
import { Event } from '../models/event';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-event',
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './event.component.html',
  styleUrl: './event.component.scss'
})
export class EventComponent {
  @Input() event !: Event;
}
