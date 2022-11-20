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
   // this.service.getAllUser().subscribe(result=>this.users=result);
     this.getsoftBooks();
     
  }
  getsoftBooks(){
    this.service.getAllUser().subscribe(result=>this.users=result);
  }
    
  BookDelete(id:number){
       this.service.deletePost(id);
       console.log("user deleted");  
       this.onReload();
  }

   


  getById(id:number){
    this.router.navigate(['/details']);
    this.service.getById(id);
    console.log("user Found");  
    
    //this.onReload();
  }

  flag=false;
   

  onReload(){
    this.router.navigate(['/users']);
    this.ngOnInit(); 
  }
  
   
   
}
