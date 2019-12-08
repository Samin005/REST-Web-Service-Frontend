import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{

  username = 'Samin';
  password = '816c4aa8-b43b-4307-a559-013c03d1460e';

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    req = req.clone({
      setHeaders: {
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa(this.username + ':' + this.password)
      }
    });
    
    return next.handle(req);
  }
}
