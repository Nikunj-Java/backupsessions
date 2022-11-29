import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataServiceService } from '../data-service.service';
import { UserClass } from '../UserClass';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

   
  allbooks:Observable<UserClass[]>;

  //inject the service
  constructor(private router:Router, private service:DataServiceService) { }

  users:UserClass[];

  ngOnInit(): void {
    
    this.service.getAllUser().subscribe(result=>this.users=result);  
  } 
  BookDelete(id:number){
    this.users=this.users.filter(c=>c.id!==id)
       this.service.deletePost(id);
       console.log("user deleted");  
  }
   
}
