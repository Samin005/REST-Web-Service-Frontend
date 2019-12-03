import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HelloWorldService {

  constructor(private httpClient: HttpClient) { }

  getResponse(url: string, name: string) {
    return this.httpClient.get(url + '/' + name);
  }
}
