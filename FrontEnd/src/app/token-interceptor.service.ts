import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { tokenName } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector){}

  intercept(req, next) {
    const authService = this.injector.get(AuthService);
    const tokenizedReq = req.clone(
      {
        headers: req.headers.set('Authorization', 'bearer ' + authService.getToken())
      });
      return next.handle(tokenizedReq);

  }

}
