import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableModule } from 'primeng/table'
import { DynamicService } from './dynamic.service';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import {DropdownModule} from 'primeng/dropdown';
import { CustomerService } from './customer.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DialogModule} from 'primeng/dialog';
import {ToastModule} from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import { DialogService, DynamicDialogComponent, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ExtraComponent } from './extra/extra.component';



import { ButtonModule } from 'primeng/button';
import { AdminModule } from './admin/admin.module';
import { LoginComponent } from './login/login.component';
import { MasterModule } from './master/master.module';

import { SharedModule } from './Shared Module/shared/shared.module';
import { EmployeeService } from './admin/service/employee.service';
import { EmployeeComponent } from './employee/employee.component';
import { LayoutModule } from './layout/layout.module';
import { DemoModuleComponent } from './DemoModule/demo-module/demo-module.component';
import { DemoRoutingModule } from './DemoModule/demo.routing.module';
import { HeaderInterceptor } from './header.interceptor';
import { AuthGuardService } from './employee/auth/auth-guard.service';
import { ErrorInterceptor } from './employee/interceptor/error.interceptor';
import { TokenInterceptorService } from './employee/interceptor/token-interceptor.service';
import { FilterPipe } from './employee/custome pipe/filter.pipe';

import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {ProgressBarModule} from 'primeng/progressbar';
import { DateTimeComponent } from './date-time/date-time.component';
import {CalendarModule} from 'primeng/calendar';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AsyncAwiatComponent } from './async-awiat/async-awiat.component';
import { AppService } from './admin/service/app.service';



@NgModule({
  declarations: [
    AppComponent,
    ExtraComponent,
    LoginComponent,
    EmployeeComponent, 
    DemoModuleComponent, 
    DateTimeComponent,
    AsyncAwiatComponent
    
   
  
  ],
    imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    DropdownModule,
    ToastModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DialogModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    AdminModule,
    MasterModule,
    LayoutModule,
    ReactiveFormsModule,
    SharedModule,
    DemoRoutingModule,
    CalendarModule,
		SliderModule,
		MultiSelectModule,
		ContextMenuModule,
    ProgressBarModule,

    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory: translateFactory,
        deps:[HttpClient]
      }
    }),
    
       
  ],

  exports :[
  ],

  entryComponents:[
  
    DynamicDialogComponent,
    ExtraComponent
  ],


  providers: [EmployeeService,DynamicService,CustomerService,MessageService,DynamicDialogRef,
    DialogService,ConfirmationService, AuthGuardService, CustomerService,AppService,
        
    {
      provide: HTTP_INTERCEPTORS,
      useClass : HeaderInterceptor,
      multi:true
    },
    {
      provide:HTTP_INTERCEPTORS,
      useClass:ErrorInterceptor,
      multi:true
    },
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function translateFactory(httpClient: HttpClient){
  return new TranslateHttpLoader(httpClient,'./assets/i18n/', '.json');
}