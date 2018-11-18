import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Login } from '../models/Login'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {};
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {

  }

  loginUser() {
    this.loginUserData = this.loginUserData as Login;
    console.log(this.loginUserData);
    this.authService.loginUser(this.loginUserData)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/org']);
      },
      err => console.log(err)
    );
  }

}
