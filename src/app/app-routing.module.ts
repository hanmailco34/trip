import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { SlidersComponent } from './user/sliders/sliders.component';
import { MainComponent } from './user/main/main.component';

const routes: Routes = [
  {path:'login',
  component:LoginComponent
},
{
  path:'sliders',
  component:SlidersComponent
},
{
  path:'',
  component:MainComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
