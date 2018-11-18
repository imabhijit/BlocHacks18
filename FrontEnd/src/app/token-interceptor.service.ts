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
    //let authService = this.injector.get(AuthService)
    let tokenizedReq = req.clone(
      {
        setHeaders: { Authorization: 'Bearer xx.yy.zz'}
      });
      return next.handle(tokenizedReq);
      // {
      //   headers: req.headers.set('Authorization', 'bearer ' + authService.getToken())
      // }
  }

}
