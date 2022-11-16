import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResizeComponent } from './resize/resize.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { DialogdemoComponent } from './dialogdemo/dialogdemo.component';
import { Dynamic1Component } from './dynamic1/dynamic1.component';
import { SharedModule } from '../Shared Module/shared/shared.module';
import { AdminRoutingModule } from './admin.routing.module';
import { LayoutModule } from '../layout/layout.module';
import { CustomPipe } from '../employee/custome pipe/cutome.pipe';
import { FilterPipe } from '../employee/custome pipe/filter.pipe';
import {ContextMenuModule} from 'primeng/contextmenu';

@NgModule({
  declarations: [
    ResizeComponent,
    DialogdemoComponent,
    Dynamic1Component,
    CustomPipe,
    FilterPipe
 
  ],
  imports: [
    CommonModule,
    TableModule,
    DropdownModule,
    ToastModule,
    HttpClientModule,
    DialogModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule,
    SharedModule,
    AdminRoutingModule,
    LayoutModule,
    ContextMenuModule

   
  ]
})
export class AdminModule { }
