
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
import { TipsComponent } from './community/tips/tips.component';
import { TipsWriteComponent } from './community/tips/tips-write/tips-write.component';
import { ReviewWriteComponent } from './community/tour-review/review-write/review-write.component';
import { TourPlanComponent } from './community/tour-plan/tour-plan.component';
import { PlanWriteComponent } from './community/tour-plan/plan-write/plan-write.component';
import { CompanyComponent } from './community/company/company.component';
import { FindCompanyComponent } from './community/company/find-company/find-company.component';
import { MypageComponent } from './user/mypage/mypage.component';
import { DetailCompanyComponent } from './community/company/detail-company/detail-company.component';
import { LogoutComponent } from './user/logout/logout.component';
import { DetailReviewComponent } from './community/tour-review/detail-review/detail-review.component';
import { DetailTipsComponent } from './community/tips/detail-tips/detail-tips.component';
import { EditReviewComponent } from './community/tour-review/edit-review/edit-review.component';
import { EditTipsComponent } from './community/tips/edit-tips/edit-tips.component';
import { DetailPlanComponent } from './community/tour-plan/detail-plan/detail-plan.component';
import { EditCompanyComponent } from './community/company/edit-company/edit-company.component';
import { UserdetailComponent } from './user/userdetail/userdetail.component';
import { EditPlanComponent } from './community/tour-plan/edit-plan/edit-plan.component';
import { ManageUserComponent } from './user/manage-user/manage-user.component';
import { SearchTemaComponent } from './tourInfo/search-tema/search-tema.component';


const routes: Routes = [
  {
    path:'',
    component:MainComponent
  },
  {
    path:'login',
  component:LoginComponent
},
{
  path:'logout',
  component:LogoutComponent
},
{
  path:'signup/:snsId',
  component:SignupComponent
},
{
  path:'review',
  component:TourReviewComponent
},
{
  path:'reviewWrite',
  component:ReviewWriteComponent
},
{
  path:'review/:rvNum',
  component:DetailReviewComponent
},
{
  path:'editReview/:reviewNum',
  component:EditReviewComponent
},
{
  path:'tips',
  component:TipsComponent
},
{
  path:'tipsWrite',
  component:TipsWriteComponent
},
{
  path:'tips/:tipNum',
  component:DetailTipsComponent
},
{
  path:'editTip/:tipNum',
  component:EditTipsComponent
},
{
  path:'tourPlan',
  component:TourPlanComponent
},
{
  path:'planWrite',
  component:PlanWriteComponent
},
{
  path:'tourPlan/:planNum',
  component:DetailPlanComponent
},
{
  path:'company',
  component:CompanyComponent
},
{
  path:'findCompany',
  component:FindCompanyComponent
},
{
  path:'editCompany/:withNum',
  component:EditCompanyComponent
},
{
  path:'company/:withNum',
  component:DetailCompanyComponent
},
{
  path:'mypage',
  component:MypageComponent
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
},
{
  path:'userdetail',
  component:UserdetailComponent
},
{
  path:'editPlan/:planNum',
  component:EditPlanComponent
},
{
  path:'manageUser',
  component:ManageUserComponent
},
{
  path:'tsearch',
  component:SearchTemaComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
