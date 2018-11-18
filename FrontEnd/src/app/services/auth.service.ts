import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:3000/api/login';

  constructor(private http: HttpClient, private router: Router) { }

  loginUser(user) {
    return this.http.post<any>(this.baseUrl, user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }
}

