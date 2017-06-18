import { Component, Input, Output, EventEmitter, OnChanges, OnInit} from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router'

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  //A router for routing to a different page.
    constructor(private loginService: LoginService, private router: Router) { }
    message: any = ''
    token: any = ''
    username: any = ''
  ngOnInit() {
  }

  // submit(data) {
  //   let response = this.loginService.postUser(data).toPromise().then((data) => {
  //   console.log(response);
  //   this.router.navigate(['./dashboard']);
  // }).catch((error) => {
  //     console.log('there was an error');
  //   });


submit(data){
    this.loginService.postUser(data)
    .subscribe(response => {
      this.message = response.message
      this.token = response.token
      console.log(this.message)

      if(this.token != null){
        this.router.navigate(["./dashboard"])
        localStorage.setItem('token', this.token)
        localStorage.setItem('username', response.username)
        
      }
    });
}
}