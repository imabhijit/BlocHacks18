import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  baseURL = '//localhost:3000';

  constructor( private http: HttpClient) { }

  getAll(){
    return this.http.get(this.baseURL+'/api/organizations');
  }
}
