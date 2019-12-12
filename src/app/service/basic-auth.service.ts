import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthService {

  url = 'http://localhost:7000';
  username = 'Samin';
  password = '816c4aa8-b43b-4307-a559-013c03d1460e';
  jwtToken = '';

  constructor(private httpClient: HttpClient) { }
  
  // Used for Basic Spring Security
  // logInBasicAuth() {
  //   return this.httpClient.get(this.url + '/basicAuth');
  // }

  logInJWTAuth() {
    return this.httpClient.post(this.url + '/authenticate', {
      "username": this.username,
      "password": this.password
      });
      // .pipe(map((data:any) => {
      //   this.jwtToken = data.token;
      //   return data.token;
      // }));
  }
}
