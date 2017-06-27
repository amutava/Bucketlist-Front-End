import { Component, Input, Output, EventEmitter, OnChanges, OnInit} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import {BucketListService} from './bucketlist.service'
import {BucketList} from "./model"
import {BucketListItem} from "./bucketlistitem"
import { NotificationsService } from 'angular2-notifications';



@Component({
 
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [BucketListService]
})
export class DashboardComponent implements OnInit {

  constructor(private bucketListService: BucketListService,
   private router: Router,
   private service: NotificationsService
   
   ) {}
  message: any ='';
  buckets: any = {};
  items: BucketListItem[] =[];
  bucketlists =[];
  bucketlistId:number = 0;
  name;
  search;
  ngOnInit() {
    this.getBucketLists();
  }

  searchbucket(){
    if (this.search){
      let response = this.bucketListService.searchbucket(this.search).subscribe(response => {
        this.buckets = response
      });
    }
    
  }
  

  addBucketList(data){
   let response = this.bucketListService.createBucketList(data).subscribe(response => {
    console.log(response);
    this.message = response.message
    console.log(this.message);
    this.service.success(
      'Success',
      "Bucketlist added Successfully!",
      {
        timeOut: 5000,
        showProgressBar: true,
        pauseOnHover: false,
        clickToClose: false,
        maxLength: 50
      })
  
     });
  this.getBucketLists()

 }


 getBucketLists(){
   let response = this.bucketListService.getBucketLists().subscribe(response => {
    this.buckets = response
    
  });
 }
 setId(id){
  this.bucketlistId = id;
}
editBucketList(){
  let response = this.bucketListService.editBucketList(this.bucketlistId, this.name).subscribe(response => {
    let bucket = this.buckets.bucketlists.filter((t)=>t.id == this.bucketlistId)[0];
    bucket.name = this.name
    this.message = response.message;
    this.getBucketLists();
    this.service.success(
      'Success',
      "Bucketlist edited Successfully!",
      {
        timeOut: 5000,
        showProgressBar: true,
        pauseOnHover: false,
        clickToClose: false,
        maxLength: 50
      })
    
  });
}

deleteBucketList(){
  let response = this.bucketListService.deleteBucketList(this.bucketlistId).subscribe(response => {
   this.service.success(
      'Success',
      "Bucketlist deleted Successfully!",
      {
        timeOut: 5000,
        showProgressBar: true,
        pauseOnHover: false,
        clickToClose: false,
        maxLength: 50
      })
   this.getBucketLists();
 });
}



addItem(name){
	let response = this.bucketListService.addBucketListItem(name, this.bucketlistId).subscribe( response=> {
    this.message = response.message;
    this.service.success(
      'Success',
      "Item added Successfully!",
      {
        timeOut: 5000,
        showProgressBar: true,
        pauseOnHover: false,
        clickToClose: false,
        maxLength: 50
      })
    
  });
} 

viewItems(bucketlistId: number){
  this.router.navigate(['/bucketlistitems'], {queryParams: {bucketlistId: bucketlistId}})

}

}
