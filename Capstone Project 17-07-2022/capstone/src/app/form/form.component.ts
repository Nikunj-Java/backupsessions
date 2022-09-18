import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { UserClass } from '../UserClass';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private service:DataServiceService) { }

  ngOnInit(): void {
  }

  user = {
    name: '',
    country:'',
    email: '',
  };
  //user:UserClass;

  isBookAdded = false;

  // Add New
  addBook(): void {

    const data = {
      name: this.user.name,
      email: this.user.email,
      country: this.user.country
    };
    if (!data.name) {
      alert('Please add title!');
      return;
    }

    this.service.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.isBookAdded = true;
          
        },
        error => {
          console.log(error);
        });
  }
  

   
 

}
