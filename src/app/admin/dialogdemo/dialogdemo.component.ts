import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Employee } from 'src/app/employee';
import { EmployeeComponent } from 'src/app/employee/employee.component';
import { Product } from 'src/app/product';
import { Dynamic1Component } from '../dynamic1/dynamic1.component';


import { ResizeComponent } from '../resize/resize.component';
import { AppService } from '../service/app.service';

@Component({
  selector: 'app-dialogdemo',
  templateUrl: './dialogdemo.component.html',
  styleUrls: ['./dialogdemo.component.scss']
})

export class DialogdemoComponent implements OnInit ,OnDestroy {

  username;

  constructor(public dialogService: DialogService,public messageService :MessageService, 
    private appService: AppService) {

        this.appService.exclusive.next(true);
       
        this.appService.username.subscribe(res => {

        this.username= res;
      })
    }

  ref  : DynamicDialogRef;


  ngOnInit(): void {

        //this.appService.exclusive.next(true)

  }
  
ngOnDestroy(): void {

  this.appService.exclusive.next(false)
   if(this.ref){
   this.ref.close();
 }
}

 show(){
 
       this.ref =this.dialogService.open(EmployeeComponent, {
    
       header:'choose a Employee',
       width: '80%',
       contentStyle: {'max-height':'500px', 'overflow':'auto'},
       baseZIndex: 10000
    
   });


     this.ref.onClose.subscribe((employee : Employee) => {
        if(employee){
            this.messageService.add({severity:'info',summary:'Employeee Added',detail:employee.name,life:500});
          }
     })
}

  open()
  {

     this.ref = this.dialogService.open(ResizeComponent ,{
     
     header :'Choose a Customer',
     width :'80%',
     contentStyle: {'max-height': '500px', 'overflow':'auto'},
     baseZIndex:2000

  });

  this.ref.onClose.subscribe(( product :Product) =>{
 
      if(product){
      this.messageService.add({severity:'info',summary:"customer selected",detail: product.name})
   
    }
  });
  
}


} 
