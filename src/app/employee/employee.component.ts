import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem, MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';

import { EmployeeService } from '../admin/service/employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit, OnDestroy {

  employees: any = [];
  employee: Employee;
  selectedEmployee: Employee;
  saveDetails:   boolean = false;
  updateDetails: boolean = false;
  deleteDetails: boolean = false;
  private sub: Subscription[] = [];
  frozenCols:any[];
  nameSearch:string= '';
  scrollableCols :any[];

  items:MenuItem[];
 
  rightPanel:any={};

  currentRecord: any;
  selectedEmployeeArray: Employee[];


  userName : string;


  constructor(private employeeService: EmployeeService, public messageService: MessageService,
                 private translateService: TranslateService)
   {
          this.employee = new Employee();

          this.employeeService.userName.subscribe( res => 
            {
              
              this.userName =res ;
            })
         
   }
   onChange(uname){
    console.log(uname.value);
    this.employeeService.userName.next(uname.value);
   
   }

  ngOnInit(): void {

    this.getEmployeeData();
    this.saveDetails = false;
    this.updateDetails = true;
    this.deleteDetails = true;

    // Frozen Column code starts

    this.frozenCols=[ 
      {
        field:'name', header:this.translateService.instant('global.name'), width:200
      }
    ],


    this.scrollableCols=[
     
      { field:'address',header:this.translateService.instant('global.Address'),width:200 },
      { field:'deptName', header:this.translateService.instant('global.DepartmentName'),width:200},
      

    ];
 // Frozen Column code end


 // Context menu code starts

    this.items=[
      {
        label:'Status',
        icon:'pi pi-user-edit',
          
           items: 
           [
             {
              label:'In Progress',
              icon:'pi pi-spin pi-spinner',
              command :() => console.log('In Progress')
             },

             {
              label:'Accepted',
              icon:'pi pi-check',
              command :() => console.log('Accepted')
             },

             {
              label:'Completed',
              icon:'pi pi-shield',
              command :() =>  console.log('Completed')
             }
                     
           ] 
      },
      
            {
              label:'Edit', 
              icon:'pi pi-pencil', 
              command: () => this.updateEmployee(this.employee),
            },
            {
              label:'Delete',
              icon:'pi pi-fw pi-trash',
              command: () => this.deleteEmployee(this.employee.id)
            },
            {
              label:'Quit',
              icon:'pi pi-fw pi-power-off'
            }
   ]
  };

// Mouse Event code
  mouseClick($event){
  

    if($event.which === 3){
      this.rightPanel={
        'display':'block',
        'position':'absolute',
        'left.px':$event.clientX,
        'top.px':$event.clientY
      };
    }

  }

  setFrozenCols(){
    
  }

  // Context menu code end



  

  ngOnDestroy() {
    {
      this.sub.forEach(res => {
        res.unsubscribe();

        console.log(res, true);
      });
    }
  }

// Row Select and unselect code starts

  onRowSelect(event) {
    // this.messageService.add({severity:'info', summary:'Employee Selected', life:1000,detail:event.data.name});
    //   console.log(event)
    console.log(event);
    this.employee = { ...event.data };
    this.saveDetails = true;
    this.updateDetails = false;
    this.deleteDetails = false;
    
  }

  onRowUnselect(event) {

    this.saveDetails = false;
    this.updateDetails = true;
    this.deleteDetails = true;
    this.clearData();
  
  }
 // Row Select and unselect code end

 
// Get Employee List code starts

  getEmployeeData() {
    this.sub.push(this.employeeService.getEmployee().subscribe(data => {

      console.log(data)
      this.employees = data;

    }
  ) );
  }

// Get Employee List code end



// Create Employee code start
  
  createEmployee(employee: Employee) {

    this.sub.push(this.employeeService.createEmployee(employee)
     .subscribe((data) => {
    
      this.employees = data;
      this.messageService.add({severity:'info', summary: 'Employee Created', life:1000, detail:this.employee.name});
     
      this.clearData();
    }
    
    ));
  }

// Create Employee code end


// Update Employee code start


  updateEmployee(selected: Employee) {

    this.sub.push(this.employeeService.updateEmployee(selected).subscribe(data => {
      
      if (!this.validationEmployee()) 
      {
        return false;
             
      }
      
      this.employees = data;
      this.messageService.add({severity:'info', summary: 'Employee Updated', life:2000, detail:this.employee.name});
     
       this.clearData(); 
    
    }
    ));

    this.saveDetails = true;
    this.updateDetails = false;
    this.deleteDetails = true;
  
  
  }
  
// Update Employee code end


// Clear Data code start

  clearData() {
   
    this.employee = new Employee()
    this.saveDetails = false;
    this.updateDetails = true;
    this.deleteDetails = true;

  }
// Clear Data code end 


  
// Delete Employee code start

  deleteEmployee(id) {

    if (confirm('Are you sure??')) {
      
        
      this.sub.push(this.employeeService.deleteEmployee(id).subscribe((data) => {
      
    
      this.employees      = data;
      this.saveDetails    = false;
      this.updateDetails  = true;
      this.deleteDetails  = true;
      
      this.messageService.add({severity:'info', summary: 'Record has been successfully deleted', life:2000,detail: this.employee.name});
      this.clearData();

    }));
  }
  }
  
// Delete Employee code end


// Submit data code starts
submitData() {
   
  if (this.employees.length == 0){
    this.employee.id = this.employee.id + 1;
  }
    
  else{
    this.employee.id = this.employees.length + 1;  
  }
  

  if (this.validationEmployee()) {
   
    this.createEmployee(this.employee);
    this.clearData();
    this.saveDetails = false;
    this.updateDetails = true;
    this.deleteDetails = true;
  }
}

// Submit data code end

// Validation code start


  validationEmployee() 
  {
    if (!this.employee.name.trim())
     {
      alert("Please enter name");  
      return false;
     }
     else

      this.employee.name = this.employee.name.trim();
 
     if (this.employee.name.length <= 1) 
     {
      alert("Name should be between 2 to 15 characters")
      return false;
     }

     if (!this.employee.address) {
      alert("please enter address")
      return false;
     }
     if (this.employee.address.length <= 2)
     {
      alert("Address should be between 4 to 15 characters")
      return false;
     }
  
     if (!this.employee.deptName) 
     {
      alert("please enter address")
      return false;
     }
     if (this.employee.deptName.length <= 2 ) 
     {
      alert("Department Name should be between 3 to 15 characters")
      return false;
     }
       
     return true;
  }

// Validation code end

}


