import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HelloWorldService {

  url = 'http://localhost:7000/hello-world-bean';

  constructor(private httpClient: HttpClient) { }

  getResponse(name: string) {
    return this.httpClient.get(this.url + '/' + name);
  }

  getResponseWithPathVariable(url: string) {
    return this.httpClient.get(url);
  }
}
