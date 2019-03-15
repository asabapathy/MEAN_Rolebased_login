import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private _regularEventsUrl = "http://localhost:3000/api/regularEvents";
  private _specialEventsUrl = "http://localhost:3000/api/specialEvents";

  constructor(private http: HttpClient) { }

  getNormalEvents() {
    return this.http.get<any>(this._regularEventsUrl);
  }

  getSpecialEvents() {
    return this.http.get<any>(this._specialEventsUrl);
  }
}

