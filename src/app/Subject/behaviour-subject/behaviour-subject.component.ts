import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/admin/service/employee.service';
import { EmployeeComponent } from 'src/app/employee/employee.component';

@Component({
  selector: 'app-behaviour-subject',
  templateUrl: './behaviour-subject.component.html',
  styleUrls: ['./behaviour-subject.component.scss']
})
export class BehaviourSubjectComponent implements OnInit {

  constructor( private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

 onChange(data){
  this.employeeService.sendNotification(data.value)
 }

 onUser(data){
  this.employeeService.setUser(data.value);
 }


}
