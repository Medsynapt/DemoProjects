import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor( private http:HttpClient) { }

    getCustomer(){

     return this.http.get<any>('assets/customer1.json')
      .toPromise()
      .then(res =>  <Customer[]>res.data)
      .then(data=>{return data;});
    }

}
