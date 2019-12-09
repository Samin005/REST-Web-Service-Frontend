import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthService {

  url = 'http://localhost:7000';
  username = 'Samin';
  password = '816c4aa8-b43b-4307-a559-013c03d1460e';

  constructor(private httpClient: HttpClient) { }
  
  logInBasicAuth() {
    return this.httpClient.get(this.url + '/basicAuth');
  }
}
