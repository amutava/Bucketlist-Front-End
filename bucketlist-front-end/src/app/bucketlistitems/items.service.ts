import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { BucketListItem } from './items'



// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ItemsService{

	// Resolve HTTP using the constructor
   constructor (private http: Http) {}
   // private instance variable to hold base url
   private bucketListItemUrl = "http://localhost:5000/bucketlistitems";


     public getBucketListItems(bucketListId){
     return this.http
      .get(this.bucketListItemUrl +"/"+<string>bucketListId + "/items", {"headers" : this.getHeaders()})
      .map(response => {
        return response.json();
      })
      //.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  public deleteBucketListItem(bucketListId, itemId){
  	 return this.http
      .delete(this.bucketListItemUrl +"/"+<string>bucketListId + "/items/"+<string>itemId, {"headers" : this.getHeaders()})
      .map(response => {
        return new BucketListItem(response.json());
      })
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  
  }
     

  public editBucketListItem(bucketListId, itemId, name){
  	return this.http
      .put(this.bucketListItemUrl +"/"+<string>bucketListId + "/items/"+ <string>itemId, JSON.stringify({"name": name}), {"headers" : this.getHeaders()})
      .map(response => {
        return new BucketListItem(response.json());
      })
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
 
  private getHeaders() {
    let headers = new Headers();
    let token = localStorage.getItem("token");
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', token);
    return headers;
}
}