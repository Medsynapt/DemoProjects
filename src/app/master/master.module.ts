import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { MasterRoutingModule } from './master.routing.module';
import { SharedModule } from '../Shared Module/shared/shared.module';




@NgModule({
  declarations: [
    ParentComponent,
    ChildComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    MasterRoutingModule,
    SharedModule
    
  ]
})
export class MasterModule { }
