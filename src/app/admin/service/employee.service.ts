import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Employee } from 'src/app/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  public serverPath="http://localhost:9292/api/Employee";
 


  /// Subject and BehaviorSubject starts
  
  
  userName= new Subject <any> ();

  userAddSubject: BehaviorSubject<string> = new BehaviorSubject<string>('vishal');

  public notifySubject = new Subject<string>();

  public demoSubject = new Subject<string>();


  /// Subject and BehaviorSubject end


  constructor( private http: HttpClient) { }

  
  /// Subject and BehaviorSubject starts

  sendNotification(data){

     this.notifySubject.next(data);
  }

  setUser(data){

     this.userAddSubject.next(data);
  }

  demoDataSubject(data){
    this.demoSubject.next(data);
  }
  
  /// Subject and BehaviorSubject ends



  getEmployee() {
   
    return this.http.get<Employee>(this.serverPath + '/GetEmployee');
  
  }

  createEmployee(obj):Observable<any>{
    
    return this.http.post<Employee>(this.serverPath +'/SaveEmployee',obj);
  }


  updateEmployee(employee : Employee){
 
    return this.http.put<Employee>(this.serverPath + '/UpdateEmployee',employee);
  }


  deleteEmployee(id: number ){
    return this.http.delete<Employee>(this.serverPath +'/DeleteEmployee?id='+ id)
  }


}
