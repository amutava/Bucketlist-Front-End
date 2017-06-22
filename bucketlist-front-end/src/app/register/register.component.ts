import { Component, Input, Output, EventEmitter, OnChanges, OnInit} from '@angular/core';
import { RegisterService } from './register.service';
import { Router } from '@angular/router'

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  constructor(private registerService: RegisterService, private router: Router) { }
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
    
  }
}