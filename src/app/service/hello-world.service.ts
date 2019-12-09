import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HelloWorldService {

  url = 'http://localhost:7000/hello-world-bean';
  // username = 'Samin';
  // password = '816c4aa8-b43b-4307-a559-013c03d1460e';

  constructor(private httpClient: HttpClient) { }

  getResponse(name: string) {
    // return this.httpClient.get(this.url + '/' + name, {headers: this.getAuthorizedHttpHeader()});
    return this.httpClient.get(this.url + '/' + name);
  }

  // getResponseWithPathVariable(url: string) {
  //   // return this.httpClient.get(url, {headers: this.getAuthorizedHttpHeader()});
  //   return this.httpClient.get(url);
  // }

  
  // getAuthorizedHttpHeader() {
  //   return new HttpHeaders({
  //     'Content-Type':  'application/json',
  //     'Authorization': 'Basic ' + btoa(this.username + ':' + this.password)
  //   });
  // }
}
