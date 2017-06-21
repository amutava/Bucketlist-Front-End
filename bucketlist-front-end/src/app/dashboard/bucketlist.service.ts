import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { BucketList } from './model';
import { BucketListItem } from './bucketlistitem' 

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class BucketListService{
	// Resolve HTTP using the constructor
    constructor (private http: Http) {}
   // private instance variable to hold base url

    private bucketlistsUrl = "http://localhost:5000/bucketlists"; 
    private bucketListItemUrl = "http://localhost:5000/bucketlistitems";
    

  public createBucketList(body: Object): Observable<any>{

    return this.http
      .post(this.bucketlistsUrl, JSON.stringify(body), {"headers" : this.getHeaders()})
      .map(response => {
        return new BucketList(response.json());
      })
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  public getBucketLists(){
  	return this.http
      .get(this.bucketlistsUrl, {"headers" : this.getHeaders()})
      .map(response => {
      	if (response){
      		return response.json();
      	}
       
      })
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

   public searchbucket(search){
    return this.http
      .get(this.bucketlistsUrl+"?q="+<string>search, {"headers" : this.getHeaders()})
      .map(response => {
        if (response){
          return response.json();
        }
       
      })
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  public editBucketList(bucketListId, name): Observable<any>{

  	return this.http
      .put(this.bucketlistsUrl +"/"+<string>bucketListId, JSON.stringify({"name":name}), {"headers" : this.getHeaders()})
      .map(response => {
        return new BucketList(response.json());
      })
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  public deleteBucketList(bucketListId) {

  	return this.http
      .delete(this.bucketlistsUrl + "/"+<string>bucketListId, {"headers" : this.getHeaders()})
      .map(response => null)
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

 
  public addBucketListItem(name, bucketlistId){
     return this.http
      .post(this.bucketListItemUrl +"/"+<string>bucketlistId + "/items", JSON.stringify({"name": name}), {"headers" : this.getHeaders()})
      .map(response => {
        return new BucketListItem(response.json());
      })
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

   public getBucketList(bucketListId){
   return this.http
      .get(this.bucketlistsUrl + "/"+<string>bucketListId, {"headers" : this.getHeaders()})
      .map(response => {
        return new BucketList(response.json());
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