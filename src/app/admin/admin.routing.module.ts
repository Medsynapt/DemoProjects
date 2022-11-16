import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DialogdemoComponent } from "./dialogdemo/dialogdemo.component";
import { Dynamic1Component } from "./dynamic1/dynamic1.component";


import { ResizeComponent } from "./resize/resize.component";


const adminRoutes : Routes =  [



  {
    path: 'resize', component: ResizeComponent 
  },
  {
    path: 'demo', component:Dynamic1Component
  },
  {
    path:'dialog',component:DialogdemoComponent
  },

  
];



@NgModule({

    imports: [RouterModule.forChild(adminRoutes)],
    exports:[RouterModule]

   
})

export class AdminRoutingModule{

}