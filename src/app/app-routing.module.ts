import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsyncAwiatComponent } from './async-awiat/async-awiat.component';
import { AppRoutingConstants, DemoModuleConstant, RoutingModulesConstatnt } from './constant';
import { DateTimeComponent } from './date-time/date-time.component';
import { DemoHtmlComponent } from './demo-html/demo-html.component';
import { AuthGuard } from './employee/auth/auth.guard';
import { EmployeeComponent } from './employee/employee.component';
import { EncryptDecryptComponent } from './encrypt-decrypt/encrypt-decrypt.component';
import { ExtraComponent } from './extra/extra.component';
import { LayoutComponent } from './layout/layout.component';



import { LoginComponent } from './login/login.component';
import { BehaviourSubjectComponent } from './Subject/behaviour-subject/behaviour-subject.component';
import { Comp2Component } from './Subject/comp2/comp2.component';


const routes: Routes = [

          { 
                path:'', component:LoginComponent, pathMatch:'full'},
          {
                path:AppRoutingConstants.loginPage,component:LoginComponent 
          },   
        
          
          {
            path:'',
            component:LayoutComponent,
           
            children:[
              {
                path : 'employee', component:EmployeeComponent
              } ,
            
              {
                path:'date',component:DateTimeComponent
              } ,

              {
                path:'extra',component:ExtraComponent
              },

              {
                path:'async', component: AsyncAwiatComponent
              },
              
              {
                path:'subject', component: BehaviourSubjectComponent
              },
              {
                path:'demohtml',component: DemoHtmlComponent
              },
              {
                path:'crypto', component:EncryptDecryptComponent
              },
              {
                path:RoutingModulesConstatnt.adminForm,
                 canActivate: [AuthGuard],        
                loadChildren: () => import('./admin/admin.module').then ( m => m.AdminModule)
          
              },  
            
              {
                 path: RoutingModulesConstatnt.masterForm,
                 canActivate: [AuthGuard],
                 loadChildren: () => import ('./master/master.module').then(m => m.MasterModule)
              },

           
              
              
              ]
          },

           { path: "**", redirectTo: '/login' }
        
        ];

       
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
   
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
