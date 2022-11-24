import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { rejects } from 'assert';
import { resolve } from 'dns';
import { promise } from 'protractor';
import { delay } from 'rxjs/operators';
import { EmployeeService } from '../admin/service/employee.service';

@Component({
  selector: 'app-async-awiat',
  templateUrl: './async-awiat.component.html',
  styleUrls: ['./async-awiat.component.scss']
})
export class AsyncAwiatComponent implements OnInit {

  
  private apiURL = "http://localhost:9292/api/Employee/GetEmployee";
  public message: string = "Uninitialized";
  public response;


  constructor(private httpClient: HttpClient, private employeeService : EmployeeService) { }


  async fetchData() {
    this.message = "Fetching..";
    this.response = "";
    this.response = await this.httpClient
      .get<any>(this.apiURL)
      .pipe(delay(1000))
      .toPromise();
    this.message = "Fetched";
  }


  ngOnInit(): void {

    this.getEmployee();
  }

  getEmployee(){

   

    this.employeeService.getEmployee().subscribe(data =>{

      console.log(data);
    })

  }

  async getEmployee1(){

    let resolve = await this.employeeService.getEmployee().subscribe(data1 =>
      {  
  
      console.log(data1) 
      },
    
      )};



   getEmpl() {
        return new Promise(async (resolve, reject) => {
          
         await this.employeeService.getEmployee().subscribe(response => {
          console.log(response);

            resolve(true);
          }, (error) => {
            reject(error)
          })
        })
      }
  
      
}

