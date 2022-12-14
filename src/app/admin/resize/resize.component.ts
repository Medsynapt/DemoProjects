import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { Customer } from 'src/app/customer';
import { CustomerService } from 'src/app/customer.service';
import { DynamicService } from 'src/app/dynamic.service';
import { Product } from 'src/app/product';
import { TranslateService } from '@ngx-translate/core';
import { EmployeeService } from '../service/employee.service';


@Component({
  selector: 'app-resize',
   templateUrl: './resize.component.html',
  //  template:` <div>
  //             <p> today is {{today | newPipe}}</p>         
  //             </div>`,


  styleUrls: ['./resize.component.scss']
})
export class ResizeComponent implements OnInit {

  today: number = Date.now();

  products: Product[];

  product : Product;

  product1 : Product;

  submitted:boolean;

  productDialog:boolean;

  customers: Customer[];

  selectedProduct1: Product[];

  saveProductButton :   boolean =false;
  updateProductButton : boolean =false;
  deleteProductButton : boolean =false;

  nameSearch:string ='';

  frozenCols:any[];

  scrollableCols :any[];

  item: MenuItem[];


  userName:String;




  constructor( public resizeService: DynamicService ,public customerService: CustomerService, public dynamicService : DynamicService
     , public messageService: MessageService , public ref : DynamicDialogRef,public confirmationService: ConfirmationService,
     private translateService : TranslateService, private employeeService: EmployeeService) {
    
     this.employeeService.userName.next();
      
    

   }
   

  ngOnInit(): void {

     this.product =new Product();

     
     
    this.resizeService.getProducts().then(data => this.products= data);

    this.customerService.getCustomer().then(data => this.customers= data);

    this.saveProductButton=false;
    this.updateProductButton= true;
    this.deleteProductButton = true;


    this.frozenCols=[
      { field:'id',header:this.translateService.instant('resize.Id') , width:200},
    
      
    ],

    this.scrollableCols =[
      
      { field:'name',     header:this.translateService.instant('resize.Name'),width:200  },    
      { field:'code',     header: this.translateService.instant('resize.Code'),width:200},
      { field:'category', header:this.translateService.instant('resize.Category'),width:200},
      { field:'quantity', header:this.translateService.instant('resize.Quantity'),width:200}
    ]

    this.item = [
      {
         label:'Change Status',
         icon:'pi pi-fw pi-file',
  
         items:[
                  {
                     label:'Delete',
                     icon:'pi pi-fw pi-bookmark',
                     command:() => this.deleteProduct(this.product.id)
                  },
                  {
                     label:'edit',
                     icon:'pi pi-fw pi-edit',
                   
                  },

               ]
                           
      },

      {
        separator:true
      },
      
                                
   ];

  }
          

      // {
      //   label:'Delete', icon: 'pi pi-fw pi-times', command: ()=> this.deleteProduct(this.selectedProduct1)
      // }


  submitData(){
  
    if (this.products.length === 0){
      this.product.id = this.product.id+1;
    }
  
    else{
      this.product.id = this.products.length+1;  
    }

    if(this.validateProduct){
      this.saveProduct(this.product);
      
      this.clearData();
      this.saveProductButton = false;
      this.updateProductButton = true;
      this.deleteProductButton = true;

    }
  }


  selectProduct( product :Product){

    this.ref.close(product);
    

  }

  onRowSelect(event){

    console.log(event);
    this.product = { ...event.data };
    this.saveProductButton = true;
    this.updateProductButton = false;
    this.deleteProductButton = false;
  
  }

  onRowUnselect(event){
    console.log(event);
   
    this.saveProductButton = false;
    this.updateProductButton = true;
    this.deleteProductButton = true;
   
    
  }

 openNew(){

   this.submitted = false;
   this.productDialog = true;

 }

 updateProduct(product : Product){
    
     if (!this.validateProduct()) 
     {
       return false;
            
     }
      this.products.push(this.product);
      //this.products = this.dynamicService.addProduct(product)
      this.saveProductButton=true;
      this.updateProductButton=true;
      this.deleteProductButton = false;
      this.clearData();
  
 }

 saveProduct(product : Product){
  this.submitted= true;
  this.products.push(this.product);
  this.messageService.add({severity:'success', summary: 'Successful', detail: this.product.name, life: 1000});
  
  // this.products = this.dynamicService.addProduct(product)
 
 }
  
 clearData(){

  this.product = new Product()
  this.saveProductButton = false;
  this.updateProductButton = true;
  this.deleteProductButton = true;
}

deleteProduct(id)
{
    
     this.products.forEach((value, index)=>{ 
  
       if( value== id){
       
        this.products.splice(index, 1)
        }

   });
   
   this.saveProductButton    = false;
   this.updateProductButton  = true;
   this.deleteProductButton  = true;
 
}

validateProduct() 
{
  if (!this.product.name.trim())
   {
    alert("Please enter name");  
    return false;
   }
   else

    this.product.name = this.product.name.trim();

   if (this.product.name.length <= 1) 
   {
    alert("Name should be between 2 to 15 characters")
    return false;
   }

   if (!this.product.code) {
    alert("please enter address")
    return false;
   }
   if (this.product.code.length <= 2)
   {
    alert("Address should be between 4 to 15 characters")
    return false;
   }

   if (!this.product.description) 
   {
    alert("please enter address")
    return false;
   }
   if (this.product.description.length <= 2 ) 
   {
    alert("Department Name should be between 3 to 15 characters")
    return false;
   }
     
   return true;
}




}