import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { FocusDirective } from 'src/app/directives/focus.directive';


@NgModule({
  declarations: [
    FocusDirective,
   
  ],
  imports: [
    CommonModule,
    TableModule,
   
  ],

  exports :[
    FocusDirective,
  
  ]
})
export class SharedModule { }
