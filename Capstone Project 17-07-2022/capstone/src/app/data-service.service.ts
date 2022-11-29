import { Injectable } from '@angular/core';
import{HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http'
import { Observable, observable, throwError } from 'rxjs';
import { UserClass } from './UserClass';

import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  //url:https://jsonplaceholder.typicode.com/users
  //url:string="https://jsonplaceholder.typicode.com/users";
  url:string="http://localhost:8082/api/user/";

  headers = new HttpHeaders().set('Content-Type', 'application/json');



  //inject the DI
  constructor(private http: HttpClient) { }


  //get all users
  getAllUser():Observable<UserClass[]>{
      return this.http.get<UserClass[]>(this.url);
  }

  //delete user by id
  deletePost(id:number) {
    let endPoints = id;
    this.http.delete(this.url + endPoints).subscribe(data => {
       return this.getAllUser();
    });
  }

  getCustomerById(id:number):Observable<UserClass>{
    return this.http.get<UserClass>(this.url+id);
   }
  //post
  create(data: any): Observable<any> {
    return this.http.post(this.url, data).pipe(
      catchError(this.handleError)
      );
  }
  //update
  updateCustomer(cust:UserClass,id:number){
    return this.http.put(this.url+id,cust)
  }

   // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };


  //load image
   
}
