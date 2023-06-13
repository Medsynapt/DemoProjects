import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Employee } from 'src/app/employee';
import { FileToUpload } from 'src/app/employee/file upload/FileUpload';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  public serverPath = "http://localhost:9292/api/Employee";

  public API_url = "http://localhost:9292/api/Employee/SaveUploadedFile";

  //  public API_url="http://192.168.3.34:60404/api/Employee/SaveUploadedFile";


  /// Subject and BehaviorSubject starts


  userName = new Subject<any>();

  userAddSubject: BehaviorSubject<string> = new BehaviorSubject<string>('vishal');

  public notifySubject = new Subject<string>();

  public demoSubject = new Subject<string>();


  /// Subject and BehaviorSubject end
  constructor(private http: HttpClient) { }

  // file upload service

  uploadFile(obj): Observable<any> {
    console.log(obj)
    return this.http.post<FileToUpload>(this.API_url, obj, { responseType: 'text' as 'json' });

  }

  /// Subject and BehaviorSubject starts

  sendNotification(data) {

    this.notifySubject.next(data);
  }

  setUser(data) {

    this.userAddSubject.next(data);
  }

  demoDataSubject(data) {

    this.demoSubject.next(data);
  }
  
  /// Subject and BehaviorSubject ends

  getEmployee() {

    return this.http.get<Employee>(this.serverPath + '/GetEmployee');
  }

  createEmployee(obj): Observable<any> {

    return this.http.post<Employee>(this.serverPath + '/SaveEmployee', obj);
  }

  updateEmployee(employee: Employee) {

    return this.http.put<Employee>(this.serverPath + '/UpdateEmployee', employee);
  }

  deleteEmployee(id: number) {

    return this.http.delete<Employee>(this.serverPath + '/DeleteEmployee?id=' + id)
  }
}
