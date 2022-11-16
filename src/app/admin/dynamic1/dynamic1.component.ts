import { Component, OnInit } from '@angular/core';
import { MessageService, SortEvent } from 'primeng/api';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { DynamicService } from 'src/app/dynamic.service';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-dynamic1',
  templateUrl: './dynamic1.component.html',
  styleUrls: ['./dynamic1.component.scss']
})
export class Dynamic1Component implements OnInit {

  products: Product[];

  products2: Product[];

  product3: Product[];

  product : Product;

  selectedProduct1 : Product[];

  selectedProduct2: Product[];


  constructor(public dynamicService:DynamicService, public messageService:MessageService, public ref: DynamicDialogRef) { }

  ngOnInit(): void {
  
           this.dynamicService.getProducts().then (data => this.products= data);
           this.dynamicService.getProducts().then (data => this.products2=data);
           this.dynamicService.getProducts().then (data =>this.product3 =data );
  
  }

  selectedProd(product:Product){
    this.ref.close(product);
  }



onRowSelect(event){

  this.messageService.add({severity:'info' , summary:'Product selected' , detail:event.data.name});
  console.log(event);
  console.log(this.selectedProduct2)
}

 onRowUnselect(event){

  this.messageService.add({severity:'info', summary:'Product Unselected' ,detail:event.data.name});
  console.log(event); 
  console.log(this.selectedProduct2);
  
}



customSort(event : SortEvent){

  event.data.sort((data1,data2)=>
  
  {
    let value1= data1[event.field];
    let value2= data2[event.field];
    let result=null;

    if (value1 ==null && value2 != null)
        result = -1;
    else if (value1 != null && value2==null)
        result = 1;
    else if  (value1==null && value2== null)
        result = 0;
    else if ( typeof value1 === 'string' && typeof value2 ==='string')
        result= value1.localeCompare(value2);
    else
        result =( value1 < value2 )? -1 :(value1 > value2) ? 1: 0;
        
        return (event.order* result)
  }
  
  )

}


}
