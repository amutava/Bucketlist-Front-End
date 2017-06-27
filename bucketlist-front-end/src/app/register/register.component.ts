import { Component, Input, Output, EventEmitter, OnChanges, OnInit} from '@angular/core';
import { RegisterService } from './register.service';
import { Router } from '@angular/router'
import { NotificationsService } from 'angular2-notifications';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  constructor(private registerService: RegisterService, private router: Router, 
    private service: NotificationsService) { }
  message: any ='';

  ngOnInit() {
  }

  submit(data){
    this.registerService.addUser(data)
    .subscribe(response => {
      this.message = response.message
      console.log(this.message)
      this.router.navigate(["/login"])
      
    });
    this.service.success(
      'Success',
      "User registered Successfully!",
      {
        timeOut: 5000,
        showProgressBar: true,
        pauseOnHover: false,
        clickToClose: false,
        maxLength: 50
      })
    
  }
}