import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { FormComponent } from "./form/form.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ListComponent } from "./list/list.component";
import { PopularComponent } from "./popular/popular.component";
import { TopComponent } from "./top/top.component";



export const router:Routes = [
   {
    path:"login",
    component:LoginComponent
   },

   {
    path:"form",
    component:FormComponent
   },
   {
    path:"dashboard",
    component:DashboardComponent,
    children:[
       {
          path:"list",
          component:ListComponent
       },
       {
          path:"popular",
          component:PopularComponent
       },
       {
          path:"top",
          component:TopComponent
       },
      //  {
      //    path:"view/:id",
      //    component:ListComponent
      // }
    ]
   },
   {
    path:"",
    redirectTo:"/login",
    pathMatch:"full"
   }

]