import { Component, Input, Output, EventEmitter, OnChanges, OnInit} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import {BucketListService} from './bucketlist.service'
import {BucketList} from "./model"
import {BucketListItem} from "./bucketlistitem"

@Component({
 
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [BucketListService]
})
export class DashboardComponent implements OnInit {

  constructor(private bucketListService: BucketListService,
     private router: Router) {}
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
    console.log(response);
    this.buckets = response
    console.log(this.buckets);

    });
  }
   
  }

addBucketList(data){
	let response = this.bucketListService.createBucketList(data).subscribe(response => {
    console.log(response);
    this.message = response.message
    console.log(this.message);
    this.getBucketLists();
    });

}


getBucketLists(){
	let response = this.bucketListService.getBucketLists().subscribe(response => {
    console.log(response);
  	this.buckets = response
    console.log(this.buckets);
    });
 }
 setId(id){
  this.bucketlistId = id;
 }
editBucketList(){
    let response = this.bucketListService.editBucketList(this.bucketlistId, this.name).subscribe(response => {
    console.log("response",response);
    console.log(this.buckets)
    let bucket = this.buckets.bucketlists.filter((t)=>t.id == this.bucketlistId)[0];
    console.log(bucket.name)
    bucket.name = this.name
  	this.message = response.message;
    console.log(this.message);
    this.getBucketLists();
    });
}

deleteBucketList(){
	 let response = this.bucketListService.deleteBucketList(this.bucketlistId).subscribe(response => {
   console.log(response);
   this.getBucketLists();
    });
}



addItem(name){
	let response = this.bucketListService.addBucketListItem(name, this.bucketlistId).subscribe( response=> {
    console.log(response);

  	this.message = response.message;
      console.log(this.message);
    });
} 

viewItems(bucketlistId: number){
  console.log("bucket id"+ bucketlistId);
    this.router.navigate(['/bucketlistitems'], {queryParams: {bucketlistId: bucketlistId}})

}

}
