import { Component, OnInit } from '@angular/core';
import { HelloWorldService } from './service/hello-world.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'REST-Web-Service-Frontend';
  message: string;

  constructor(private helloWorldService: HelloWorldService) {

  }

  ngOnInit(): void {
    this.helloWorldService.getResponse('http://localhost:7000/hello-world-bean', 'YOLO')
      .subscribe(
        (response: any) => this.message = response.message,
        (error) => console.log(error.name)
      );
  }
}
