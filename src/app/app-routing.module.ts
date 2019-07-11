
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { CheckListComponent } from './tourInfo/check-list/check-list.component';
import { SearchBlogComponent } from './tourInfo/search-blog/search-blog.component';
import { NgModule } from '@angular/core';
import { SearchComponent } from './tourInfo/search-video/search.component';
import { MainComponent } from './main/main.component';
import { TourReviewComponent } from './community/tour-review/tour-review.component';
import { ExchangeComponent } from './tourInfo/exchange/exchange.component';
import { HotelComponent } from './hotel/hotel.component';


const routes: Routes = [
  {path:'login',
  component:LoginComponent
},
{
  path:'review',
  component:TourReviewComponent
},
{
  path:'search',
  component:SearchComponent
},
{
  path:'bsearch',
  component:SearchBlogComponent
},
{
  path:'',
  component:MainComponent
},
{
  path:'checkList',
  component:CheckListComponent
},
{
  path:'hotel',
  component:HotelComponent
},
{
  path:'exchange',
  component:ExchangeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
