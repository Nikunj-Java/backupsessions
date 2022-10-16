import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';
import { UserClass } from '../UserClass';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  constructor(private router:Router, private service:DataServiceService) { }

  users:UserClass[];
  ngOnInit(): void {
     
  }

  getById(id:number){
    this.service.getById(id);
    console.log("user Found");  
    this.onReload();
  }

  onReload(){
    this.router.navigate(['/details']);
    this.ngOnInit(); 
  }
}
