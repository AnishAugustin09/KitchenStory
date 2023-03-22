import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  product: Product[];

  constructor(private service: ProductService, private actroute: ActivatedRoute){}

  ngOnInit(){
    this.service.getallProduct().subscribe(ob=>this.product=ob);
  }

  deleteProduct(id: number){
    this.service.deleteProduct(id).subscribe(data => {
      this.product = this.product?.filter(product => product.id !== id);
      alert('Product deleted successfully');
    })
  }
  
}
