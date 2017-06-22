import { Component, OnInit } from '@angular/core';
import {ItemsService} from './items.service';
import {BucketListService} from '../dashboard/bucketlist.service'
import {Router, ActivatedRoute} from '@angular/router'
import { BucketList } from '../dashboard/model';
import { NotificationsService } from 'angular2-notifications';
@Component({
  selector: 'app-bucketlistitems',
  templateUrl: './bucketlistitems.component.html',
  styleUrls: ['./bucketlistitems.component.css']
})
export class BucketlistitemsComponent implements OnInit {
  
  bucketlistId: number;
  bucketlist: BucketList = new BucketList

  constructor(private itemsService: ItemsService, 
    private router:Router,
    private route:ActivatedRoute,
    private bucketListService:BucketListService,
    private service: NotificationsService) {}
  message: any ='';
  itemId:number = 0;
  items:any = {};
  item = [];
  name;

  ngOnInit() {
    this.getItems()
  }
  setItem(id){
    this.itemId = id;
  }
  setBucketId(id){
   this.bucketlistId = id;
 }
 getItems(){
   this.route.queryParams.subscribe(params=>{
    this.bucketlistId = +params["bucketlistId"];
    this.bucketListService.getBucketList(this.bucketlistId).subscribe(
      (response)=>{
       this.service.success(
        'Success',
        "Items obtained Successfully!",
        {
          timeOut: 5000,
          showProgressBar: true,
          pauseOnHover: false,
          clickToClose: false,
          maxLength: 50
        })
       
       this.bucketlist= response
     })
  })
 }

 deleteItem(){
   let response = this.itemsService.deleteBucketListItem(this.bucketlistId, this.itemId).subscribe(response => {
     this.message = response.message;
     this.getItems()
     this.service.success(
      'Success',
      "Item Deleted Successfully!",
      {
        timeOut: 5000,
        showProgressBar: true,
        pauseOnHover: false,
        clickToClose: false,
        maxLength: 50
      })
   });
 }
 editItem(){
  let response = this.itemsService.editBucketListItem(this.bucketlistId, this.itemId, this.name).subscribe(response => {
    console.log(response);
    this.getItems()
    this.service.success(
      'Success',
      "Item Edited Successfully!",
      {
        timeOut: 5000,
        showProgressBar: true,
        pauseOnHover: false,
        clickToClose: false,
        maxLength: 50
      })
  });
}
}
