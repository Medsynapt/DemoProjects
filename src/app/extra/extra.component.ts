import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { rejects } from 'assert';
import { resolve } from 'dns';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { promise } from 'protractor';
import { delay } from 'rxjs/operators';
import { ResizeComponent } from '../admin/resize/resize.component';

import { Product } from '../product';


@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.scss']
})
export class ExtraComponent implements OnInit {


  constructor( public messageService: MessageService, public dialogService : DialogService,
    private httpClient:HttpClient) { }


  ref : DynamicDialogRef;

  ngOnInit(): void {

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
