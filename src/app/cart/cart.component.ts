import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/product.model';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  product: Product;
  constructor(private service: ProductService, private activateRoute: ActivatedRoute, private route:Router){}

  ngOnInit(){
    const id= this.activateRoute.snapshot.paramMap.get("id")
    this.service.getbyId(Number(id)).subscribe(x=> this.product=x)
  }

  confirmOrder(){
    alert("Order Placed Successfully")
    this.route.navigate(['/Home']);
    
  }
}
