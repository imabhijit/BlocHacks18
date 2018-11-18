import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserData = {
    'email': 'aa@email.com',
    'password': '1234'
 };

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {

  }

  loginUser() {
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
