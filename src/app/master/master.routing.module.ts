import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ChildComponent } from "./child/child.component";
import { ParentComponent } from "./parent/parent.component";


const masterRoutes : Routes =[

    {
        path:'parent',
        component:ParentComponent
    },

    {   path:'child',
        component:ChildComponent
    }
]



@NgModule({
    imports:[RouterModule.forChild(masterRoutes)],
    exports:[RouterModule]

})

export class MasterRoutingModule{

}