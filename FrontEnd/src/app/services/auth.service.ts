import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:3000/api/login';

  constructor(private http: HttpClient, private router: Router) { }

  loginUser(user): Observable<any> {
    return this.http.post<any>(this.baseUrl, user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logoutUser() {
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
  }

  getToken() {
    return localStorage.getItem('token');
}
}

