import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MdCardModule } from '@angular2-material/card';
import { SimpleNotificationsModule } from 'angular2-notifications';
import {Ng2PaginationModule} from 'ng2-pagination'; //importing ng2-pagination



import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BucketlistitemsComponent } from './bucketlistitems/bucketlistitems.component'
import { BucketListService } from './dashboard/bucketlist.service';
import { LoginService } from './login/login.service';
import { RegisterService } from './register/register.service';
import { ItemsService } from './bucketlistitems/items.service';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    BucketlistitemsComponent 

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdCardModule, 
    Ng2PaginationModule, 
    SimpleNotificationsModule.forRoot(),
    RouterModule.forRoot([
      {path:'register', component: RegisterComponent},
      {path:'login', component: LoginComponent},
      {path:'bucketlists', component: DashboardComponent},
      {path:'welcome', component: HomeComponent},
      {path:'bucketlistitems', component: BucketlistitemsComponent,},
      {path:'', redirectTo:'welcome', pathMatch:'full'},
      {path:'**', redirectTo:'welcome', pathMatch:'full'}])
  ],
  providers: [BucketListService, LoginService, RegisterService, ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
