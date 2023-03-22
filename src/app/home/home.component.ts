import { Component } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  product: Product[];

  constructor(private productservice: ProductService){}

  ngOnInit(){
    this.productservice.getallProduct().subscribe(ob=>this.product=ob);
  }
}
