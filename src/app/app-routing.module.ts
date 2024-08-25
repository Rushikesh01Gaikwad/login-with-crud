import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { NavberComponent } from './component/navber/navber.component';
import { AuthGuard } from './component/guard/auth.guard';
import { StudentAddComponent } from './component/student-add/student-add.component';
import { StudentListComponent } from './component/student-list/student-list.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"login",
    pathMatch:"full",
  },
  {
    path:"login",
    component:LoginComponent
    
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:'home',
    component:HomeComponent,
    canActivate:[AuthGuard],
    children:[
      {
        path:'navbar',
        component:NavberComponent
      },
      {
        path:'addStudent',
        component:StudentAddComponent
      },
      {
        path:'',
        component:StudentListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
