import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from 'src/app/admin/service/employee.service';
import { EmployeeComponent } from 'src/app/employee/employee.component';

@Component({
  selector: 'app-behaviour-subject',
  templateUrl: './behaviour-subject.component.html',
  styleUrls: ['./behaviour-subject.component.scss']
})
export class BehaviourSubjectComponent implements OnInit, AfterViewInit {

  UserName='vishal';  

  @ViewChild('box') box: ElementRef;

  constructor( private employeeService: EmployeeService) { }
  
  
  ngAfterViewInit(): void {
    console.log(this.box);
    this.box.nativeElement.style.backgroundColor="red"
  }

  ngOnInit(): void {
  }
  

 onChange(data){
  this.employeeService.sendNotification(data.value)
 }

 onUser(data){
  this.employeeService.setUser(data.value);
 }

 onSubject(data){
  this.employeeService.demoDataSubject(data.value);
 }


}
