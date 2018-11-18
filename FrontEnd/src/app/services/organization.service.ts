import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  baseURL = '//localhost:3000';

  constructor( private http: HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get(this.baseURL+'/api/organizations');
  }
}
