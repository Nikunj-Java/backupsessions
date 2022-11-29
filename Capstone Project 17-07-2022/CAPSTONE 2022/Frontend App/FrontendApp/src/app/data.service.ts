import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable, observable } from 'rxjs';
import { UserClass } from './UserClass';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url:string="http://localhost:8082/api/user/";

  constructor(private http:HttpClient) { 
  }

  getAllUsers():
    Observable<UserClass[]>{
      return this.http.get<UserClass[]>(this.url);
    }
}
