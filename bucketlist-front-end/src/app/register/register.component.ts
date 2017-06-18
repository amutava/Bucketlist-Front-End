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
  // submit(data) {
  //   let response = this.registerService.addUser(data).toPromise().then((data) => {
  //    this.router.navigate(['./login']);
  //   console.log(response);
  // }).catch((error) => {
  // 	this.errorMessage = error.json();
  //     console.log('there was an error');
  //   });


submit(data){
    this.registerService.addUser(data)
    .subscribe(response => {
      this.message = response.message
      console.log(this.message)
        this.router.navigate(["/login"])
      
    });
 
}
}