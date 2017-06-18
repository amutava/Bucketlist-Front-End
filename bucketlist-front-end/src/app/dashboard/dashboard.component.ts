import { Component, Input, Output, EventEmitter, OnChanges, OnInit} from '@angular/core';
import { Http, Response } from '@angular/http';
import {BucketListService} from './bucketlist.service'
import {BucketList} from "./model"
import {BucketListItem} from "./bucketlistitem"

@Component({
 
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [BucketListService]
})
export class DashboardComponent implements OnInit {

  constructor(private bucketListService: BucketListService) {}
  message: any ='';
  buckets: BucketList[] = [];
  items: BucketListItem[] =[];
  ngOnInit() {
    this.getBucketLists();
  }

addBucketList(data){
	let response = this.bucketListService.createBucketList(data).subscribe(response => {
    console.log(response);
    this.message = response.message
    console.log(this.message);
    });
}



getBucketLists(){
	let response = this.bucketListService.getBucketLists().subscribe(response => {
    console.log(response);
  	this.buckets = response
    console.log(this.buckets);
    });
 }
editBucketList(bucketListId, newName){
    let response = this.bucketListService.editBucketList(bucketListId, newName).subscribe(response => {
    console.log(response);
  
  	this.message = response.message;
      console.log(this.message);
    });
}

deleteBucketList(bucketListId){
	 let response = this.bucketListService.deleteBucketList(bucketListId).subscribe(response => {
    console.log(response);
    });
}

// getBucketList(data){
// 	let response = this.bucketListService.getBucketList(data).subscribe( => {
//    console.log(response);
  
//    this.message = response.message;
//    console.log(this.message);
//     });
// }

addItem(name, bucketListId){
	let response = this.bucketListService.addBucketListItem(name, bucketListId).subscribe( response=> {
    console.log(response);
  
  	this.message = response.message;
      console.log(this.message);
    });
}
getItems(bucketListId){
	let response = this.bucketListService.getBucketListItems(bucketListId).subscribe(response => {
    console.log(response);
  
    });
}

// getItem(data){
// 	let response = this.bucketListService.getBucketListItem(data).subscribe( => {
//     console.log(response);
//   	this.message = response.message;
//       console.log(this.message);
//     });
// }
// editItem(data){
//   let response = this.bucketListService.editBucketListItem(data).subscribe( => {
//     console.log(response);
 
//   	this.message = response.message;
//       console.log(this.message);
//     });
// }
}
