import { Component, Input, Output, EventEmitter, OnChanges, OnInit} from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router'
import { NotificationsService } from 'angular2-notifications';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  //A router for routing to a different page.
  constructor(private loginService: LoginService, private router: Router,
    private service: NotificationsService) { }
  message: any = ''
  token: any = ''
  username: any = ''
  ngOnInit() {
  }


  submit(data){
    this.loginService.postUser(data)
    .subscribe(response => {
      this.message = response.message
      this.token = response.token
      console.log(this.message)

      if(this.token != null){
        this.router.navigate(["./bucketlists"])
        localStorage.setItem('token', this.token)
        localStorage.setItem('username', response.username)
        this.service.success(
        'Success',
        "User logged in Successfully!",
        {
          timeOut: 5000,
          showProgressBar: true,
          pauseOnHover: false,
          clickToClose: false,
          maxLength: 50
        })
        
      }
    });
   
  }
}