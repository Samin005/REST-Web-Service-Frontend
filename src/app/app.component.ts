import { Component } from '@angular/core';
import { HelloWorldService } from './service/hello-world.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'REST-Web-Service-Frontend';
  name: string;
  message: string;
  responseErrorFound = false;

  constructor(private helloWorldService: HelloWorldService) {

  }

  getData(form: NgForm) {
    console.log(form.form.value.UserName);
    // for using path variable
    // this.helloWorldService.getResponse(`http://localhost:7000/hello-world-bean/${this.name}`)
    this.helloWorldService.getResponse(this.name)
    .subscribe(
      (response: any) => {
        this.message = response.message;
        this.responseErrorFound = false;
      },
      (error) => {
        console.log(error);
        this.message = error.name;
        this.responseErrorFound = true;
      },
       () => console.log('complete!')
    );
  }
}
