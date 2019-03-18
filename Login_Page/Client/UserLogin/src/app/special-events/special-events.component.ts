import { Component, OnInit } from "@angular/core";
import { EventService } from "../event.service";
import { Router } from "@angular/router";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "app-special-events",
  templateUrl: "./special-events.component.html",
  styleUrls: ["./special-events.component.css"]
})
export class SpecialEventsComponent implements OnInit {
  specialEvents = [];
  constructor(private _eventService: EventService, private _router: Router) {}

  ngOnInit() {
    this._eventService.getSpecialEvents().subscribe(
      res => (this.specialEvents = res),
      error => {
        if (error instanceof HttpErrorResponse) {
          if (error.status === 401) {
            this._router.navigate(["/login"]);
          }
        }
      }
    );
  }
}
