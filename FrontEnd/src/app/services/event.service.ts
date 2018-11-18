import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DonateEvent} from "../models/DonateEvent";
import { Login } from '../models/Login';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  baseURL = '//localhost:3000';

  constructor( private http: HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get(this.baseURL + '/api/');

  }

  getByOrganization(): Observable<any>{
    return this.http.get(this.baseURL + '/api/events/+login.email');
  }

  create(eventObj: DonateEvent): Observable<any>{
    return this.http.post(this.baseURL + '/api/create', eventObj);
  }
}
