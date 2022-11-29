import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';
import { UserClass } from '../UserClass';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  constructor(private router:Router, private activatedRoute:ActivatedRoute, private service:DataServiceService) { }

  user:UserClass
  ngOnInit(): void {
      const id=this.activatedRoute.snapshot.paramMap.get('id');
      console.log("id: "+id)
      this.service.getCustomerById(Number(id)).subscribe(data=>this.user=data);
  }
 

  
}
