import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
  <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">BucketListApp</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a [routerLink]="['/welcome']">Home</a></li>
    </ul>
    <form class="navbar-form navbar-left">
      <div class="input-group">
       <input type="text" class="form-control" placeholder="Search">
       <div class="input-group-btn">
        <button class="btn btn-default" type="submit">
         <i class="glyphicon glyphicon-search"></i>
        </button>
       </div>
      </div>
    </form>
    <ul class="nav navbar-nav navbar-right">
      <li><a [routerLink]="['/register']"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
      <li><a [routerLink]="['/login']"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
    </ul>
  </div>
</nav>
 <div class='container'>
            <router-outlet></router-outlet>
</div>
  `

})

 
export class AppComponent {
	
}
