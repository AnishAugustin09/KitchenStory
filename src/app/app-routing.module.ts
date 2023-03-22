import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './cart/cart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { AddproductComponent } from './product/addproduct/addproduct.component';
import { ListComponent } from './product/list/list.component';

const routes: Routes = [
  {path:"dashboard/ProductList" , component: ListComponent},
  {path:"dashboard/AddProduct", component: AddproductComponent},
  {path:"deleteProduct/:id", component:ListComponent},
  {path:"Home", component:HomeComponent},
  {path:"product/:id",component:CartComponent},
  {path:"Login",component:AdminComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"**",redirectTo:"Home",pathMatch:"full"}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
