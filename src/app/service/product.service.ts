import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../model/admin';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseURL: string="http://localhost:8080/";
  constructor(private http:HttpClient) { }

  getallProduct():Observable<Product[]>{
    return this.http.get<Product[]>(this.baseURL);
  }

  saveProduct(product: Product):Observable<any>{
    return this.http.post(this.baseURL, product);
  }

  deleteProduct(id: number): Observable<any>{
    return this.http.delete<any>(`${this.baseURL}deleteProduct/${id}`)
  }

  getbyId(id: number):Observable<Product>{
    return this.http.get<Product>(this.baseURL+"/product/"+id)
  }

  login(ad: Admin){
    return this.http.post(this.baseURL+"/login",ad);
  }
}
