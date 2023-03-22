import { HttpBackend, HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Admin } from '../model/admin';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  ad: Admin= new Admin();
  constructor(private service:ProductService, private route:Router){}

  onSubmit(){
    this.service.login(this.ad).subscribe(data=>{
      console.log(data)
      if(data!=null)
      this.route.navigate(['dashboard'])
      else
      alert("Sorry invalid email or password")
    })
  }
  
}
