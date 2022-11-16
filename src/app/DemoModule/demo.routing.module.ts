import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DemoModuleComponent } from "./demo-module/demo-module.component";


const routes : Routes =[

    {
        path:'modules', component:DemoModuleComponent
    }
]



@NgModule ({

    imports : [RouterModule.forChild(routes)],  
    exports : [RouterModule]

})



export class DemoRoutingModule{

}