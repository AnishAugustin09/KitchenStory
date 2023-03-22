import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {

  product: Product= new Product();

  constructor(private service:ProductService, private route: Router){}
  onSubmit(){
   this.service.saveProduct(this.product).subscribe(x=>console.log(x));
   alert("Product added successfully")
   this.route.navigate(['/dashboard']);
  }
}
