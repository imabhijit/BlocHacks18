import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appFront';

  links = ['Home', 'Organizations', 'Contribute'];
  activeLink = this.links[0];
  background = '';

  constructor(private authService: AuthService){}
}
