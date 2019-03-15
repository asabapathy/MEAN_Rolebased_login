import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-normal-events',
  templateUrl: './normal-events.component.html',
  styleUrls: ['./normal-events.component.css']
})
export class NormalEventsComponent implements OnInit {

  regularEvents = [];
  constructor(private _eventService: EventService) { }

  ngOnInit() {
    this._eventService.getNormalEvents().subscribe(
      res => this.regularEvents = res,
      err => console.log(err)
    )
  }

}
