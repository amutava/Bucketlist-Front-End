import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-root',
  template: `
  <nav class="navbar navbar-inverse">
  <div class="container-fluid">
  <div class="navbar-header">
  <a class="navbar-brand" href="#">BucketListApp</a>
  </div>
  <ul class="nav navbar-nav">
  <li *ngIf="!isLoggedIn()" class="active"><a [routerLink]="['/welcome']">Home</a></li>
  </ul>

  <ul class="nav navbar-nav navbar-right">
  <li *ngIf="!isLoggedIn()"><a [routerLink]="['/register']"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
  <li *ngIf="!isLoggedIn()"><a [routerLink]="['/login']"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>  
  <li *ngIf="isLoggedIn()"><a (click)="logout()"><span class="glyphicon glyphicon-log-out"></span> Logout</a></li>
  </ul>
  </div>
  </nav>
 <simple-notifications></simple-notifications>
  <router-outlet></router-outlet>
 <footer class="navbar-default navbar-fixed-bottom">
  <div class="container-fluid">
    <span>Bucketlist
    </span>
    <div class="container-fluid">
            © 2017 Copyright: <a href="#"> Created by Angie.</a>

        </div>
  </div>
</footer>
  `

})


export class AppComponent {
  private loggedIn = false;
  constructor(private router: Router, 
  private service: NotificationsService) { }

 ngOnInit() {
    this.loggedIn = !!localStorage.getItem('token');
  }
 logout() {
  localStorage.removeItem('token');
  this.router.navigate(["/welcome"])
  this.loggedIn = false;
  this.service.success(
        'Success',
        "Logout Successfully!",
        {
          timeOut: 5000,
          showProgressBar: true,
          pauseOnHover: false,
          clickToClose: false,
          maxLength: 50
        })
}
isLoggedIn() {
    return this.loggedIn;
  }
}
