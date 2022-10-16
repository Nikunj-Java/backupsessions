import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ImagesComponent } from './images/images.component';
import { UserComponent } from './user/user.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';

const routes: Routes = [
  

  {"path":"users",component:UserComponent},
  {"path":"form",component:FormComponent},
  {"path":"image",component:ImagesComponent},
  {"path":"details",component:UserdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
