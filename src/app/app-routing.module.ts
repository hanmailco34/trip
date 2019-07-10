import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { SlidersComponent } from './user/sliders/sliders.component';
import { MainComponent } from './user/main/main.component';
import { TestComponent } from './user/test/test.component';
import { CheckListComponent } from './user/check-list/check-list.component';


const routes: Routes = [
  {path:'login',
  component:LoginComponent
},
{
  path:'sliders',
  component:SlidersComponent
},
{
  path:'test',
  component:TestComponent
},
{
  path:'',
  component:MainComponent
},
{
  path:'checkList',
  component:CheckListComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
