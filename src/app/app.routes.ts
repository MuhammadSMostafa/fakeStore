import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
  {path:"",component:HomeComponent, title:"home"},
  {path:"product",component:ProductComponent, title:"product"},
  {path:"**",component:NotFoundComponent, title:"Not Found"},
];
