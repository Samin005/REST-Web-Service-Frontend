import { Component } from '@angular/core';
import { HelloWorldService } from './service/hello-world.service';
import { NgForm } from '@angular/forms';
import { BasicAuthService } from './service/basic-auth.service';

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
  userName: string;
  password: string;
  logInSuccess = false;

  constructor(private helloWorldService: HelloWorldService,
     private basicAuthService: BasicAuthService) {

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

  logInBasicAuth(loginForm: NgForm) {
    console.log(loginForm.form.value.userName);
    console.log(loginForm.form.value.password);
    this.basicAuthService.username = loginForm.form.value.userName;
    this.basicAuthService.password = loginForm.form.value.password;
    this.basicAuthService.logInBasicAuth().subscribe(
      (response: any) => {
        console.log(response);
        if(response.message === "You Are Authenticated"){
          this.logInSuccess = true;
        } else {
          console.log(response);
          this.logInSuccess = false;
        }
      }, 
      (error) => {
        console.log(error);
        this.logInSuccess = false;
      });
  }
}
