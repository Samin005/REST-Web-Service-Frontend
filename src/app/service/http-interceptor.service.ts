import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { BasicAuthService } from './basic-auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{

  constructor(private basicAuthService: BasicAuthService) { }

  // Used for Basic Spring Security
  // intercept(req: HttpRequest<any>, next: HttpHandler) {
  //   req = req.clone({
  //     setHeaders: {
  //       'Content-Type':  'application/json',
  //       'Authorization': 'Basic ' + btoa(this.basicAuthService.username + ':' + this.basicAuthService.password)
  //     }
  //   });
    
  //   return next.handle(req);
  // }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    req = req.clone({
      setHeaders: {
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + this.basicAuthService.jwtToken
      }
    });
    
    return next.handle(req);
  }
}
