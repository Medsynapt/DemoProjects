
import { Component, OnInit } from '@angular/core';

import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

import { ResizeComponent } from '../admin/resize/resize.component';
import { EmployeeService } from '../admin/service/employee.service';


import { Product } from '../product';


@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.scss']
})
export class ExtraComponent implements OnInit {

  message :string;

  beahviorSubject :string;

  demoSubject:string;

  constructor( public messageService: MessageService, public dialogService : DialogService, 
    private employeeService: EmployeeService) { }


  ref : DynamicDialogRef;

  ngOnInit(): void {

    this.employeeService.notifySubject.subscribe(res =>
      {
          this.message = res;
      });


    this.employeeService.userAddSubject.subscribe(res1 =>{

      this.beahviorSubject = res1;
    });

    this.employeeService.demoSubject.subscribe(res =>{

      this.demoSubject =res ;
    });
    

  }


  

add(){

  this.ref = this.dialogService.open( ResizeComponent, {

    header:"choose a Product",
    width:"55%",
    contentStyle:{'max-height':'500px','overflow':'auto'}
  });

  this.ref.onClose.subscribe(( product : Product)=>
  {
    if(product){
      this.messageService.add({severity:'info',summary:'choose a Prod',detail:product.name})
    }
  })
}
   
}
