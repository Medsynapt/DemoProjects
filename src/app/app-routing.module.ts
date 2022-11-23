import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsyncAwiatComponent } from './async-awiat/async-awiat.component';
import { AppRoutingConstants, DemoModuleConstant, RoutingModulesConstatnt } from './constant';
import { DateTimeComponent } from './date-time/date-time.component';
import { AuthGuard } from './employee/auth/auth.guard';
import { EmployeeComponent } from './employee/employee.component';
import { ExtraComponent } from './extra/extra.component';
import { LayoutComponent } from './layout/layout.component';



import { LoginComponent } from './login/login.component';


const routes: Routes = [

          { 
                path:'', component:LoginComponent, pathMatch:'full'},
          {
                path:AppRoutingConstants.loginPage,component:LoginComponent 
          },   
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
            path:'',
            component:LayoutComponent,
           
            children:[
              {
                path : 'employee', component:EmployeeComponent
              } ,
        
    

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
