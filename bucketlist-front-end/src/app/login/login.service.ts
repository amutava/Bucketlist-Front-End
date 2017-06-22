import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { User } from './model';



// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LoginService{
  private loginUrl = "http://localhost:5000/auth/login";
  // Resolve HTTP using the constructor
  constructor (private http: Http) {}
  
  // Add a new comment
  postUser (body: Object): Observable<any> {
  //let bodyString = JSON.stringify(body); // Stringify payload
  let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
  let options       = new RequestOptions({ headers: headers }); // Create a request option
  return this.http.post(this.loginUrl, JSON.stringify(body), {headers: this.getHeaders()}) // ...using post request
                         .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
                       }
                       private getHeaders() {
                        let headers = new Headers();
                        headers.append('Accept', 'application/json');
                        headers.append('Content-Type', 'application/json');
                        return headers;
                      }
                    }