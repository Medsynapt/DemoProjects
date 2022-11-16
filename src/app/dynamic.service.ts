
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class DynamicService {
  productArray: Product[];


  constructor(private http: HttpClient) { 
    
        this.productArray=[];

  }


  getProducts() {

    return this.http.get<any>('assets/product.json')
    .toPromise()
    .then(res => < Product[]>res.data)
    .then(data => {return data;})
   
}

addProduct(prod : Product ): Product[]{

  this.productArray.push(Object.assign({},prod));
  return this.productArray;
}


}