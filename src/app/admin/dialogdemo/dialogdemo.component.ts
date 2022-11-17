import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Employee } from 'src/app/employee';
import { EmployeeComponent } from 'src/app/employee/employee.component';
import { Product } from 'src/app/product';
import { Dynamic1Component } from '../dynamic1/dynamic1.component';


import { ResizeComponent } from '../resize/resize.component';

@Component({
  selector: 'app-dialogdemo',
  templateUrl: './dialogdemo.component.html',
  styleUrls: ['./dialogdemo.component.scss']
})
export class DialogdemoComponent implements OnDestroy {

  constructor(public dialogService: DialogService,public messageService :MessageService) { }

  ref  : DynamicDialogRef;

show(){

     this.ref =this.dialogService.open(EmployeeComponent, {
       header:'choose a product',
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
  this.ref = this.dialogService.open(Dynamic1Component ,{
    
    header :'Choose a Customer',
     width :'80%',
     contentStyle: {'max-height': '500px', 'overflow':'auto'},
     baseZIndex:2000

  });

  this.ref.onClose.subscribe(( product :Product) =>{
    if(product){
      this.messageService.add({severity:'info',summary:"customer selected",detail: product.name})
    }
  }
  );
  
}



ngOnDestroy(): void {
  if(this.ref){
    this.ref.close();
  }
}

} 
