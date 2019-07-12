
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { CheckListComponent } from './tourInfo/check-list/check-list.component';
import { SearchBlogComponent } from './tourInfo/search-blog/search-blog.component';
import { NgModule } from '@angular/core';
import { SearchComponent } from './tourInfo/search-video/search.component';
import { MainComponent } from './main/main.component';
import { TourReviewComponent } from './community/tour-review/tour-review.component';
import { HotelComponent } from './hotel/hotel.component';
import { NoticeBoardComponent } from './notice/notice-board/notice-board.component';
import { SignupComponent } from './user/signup/signup.component';


const routes: Routes = [
  {path:'login',
  component:LoginComponent
},
{
  path:'signup',
  component:SignupComponent
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
  path:'noticeboard',
  component:NoticeBoardComponent
},
{
  path:'hotel',
  component:HotelComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
