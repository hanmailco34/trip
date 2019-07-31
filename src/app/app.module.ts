import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import {FormsModule} from'@angular/forms';
import {HttpClientModule} from'@angular/common/http';
import { MainComponent } from './main/main.component';
import { CheckListComponent } from './tourInfo/check-list/check-list.component';
import { SearchBlogComponent } from './tourInfo/search-blog/search-blog.component';
import { SearchComponent } from './tourInfo/search-video/search.component';
import { SafePipe } from './tourInfo/search-video/safe-pipe';
import { TourReviewComponent } from './community/tour-review/tour-review.component';
import { HotelComponent } from './hotel/hotel.component';
import { NoticeBoardComponent } from './notice/notice-board/notice-board.component';
import { SignupComponent } from './user/signup/signup.component';
import { TipsComponent } from './community/tips/tips.component';
import { TipsWriteComponent } from './community/tips/tips-write/tips-write.component';
import { ReviewWriteComponent } from './community/tour-review/review-write/review-write.component';
import { MenuComponent } from './menu/menu.component';
import { TourPlanComponent } from './community/tour-plan/tour-plan.component';
import { PlanWriteComponent } from './community/tour-plan/plan-write/plan-write.component'
import { CompanyComponent } from './community/company/company.component';
import { FindCompanyComponent } from './community/company/find-company/find-company.component';
import { FooterComponent } from './footer/footer.component';
import { MypageComponent } from './user/mypage/mypage.component';
import { DetailCompanyComponent } from './community/company/detail-company/detail-company.component';
import { LogoutComponent } from './user/logout/logout.component';
import { DetailTipsComponent } from './community/tips/detail-tips/detail-tips.component';
import { DetailReviewComponent } from './community/tour-review/detail-review/detail-review.component';
import { DetailPlanComponent } from './community/tour-plan/detail-plan/detail-plan.component';
import { EditCompanyComponent } from './community/company/edit-company/edit-company.component';
import { EditReviewComponent } from './community/tour-review/edit-review/edit-review.component';
import { EditTipsComponent } from './community/tips/edit-tips/edit-tips.component';
import { UserdetailComponent } from './user/userdetail/userdetail.component';
import { CKEditorModule } from 'ckeditor4-angular';
import { EditPlanComponent } from './community/tour-plan/edit-plan/edit-plan.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ManageUserComponent } from './user/manage-user/manage-user.component';
import { SearchTemaComponent } from './tourInfo/search-tema/search-tema.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    CheckListComponent,
    SearchComponent,
    SafePipe,
    SearchBlogComponent,
    TourReviewComponent,
    HotelComponent,
    NoticeBoardComponent,
    SignupComponent,
    TipsComponent,
    TipsWriteComponent,
    ReviewWriteComponent,
    MenuComponent,
    TourPlanComponent,
    PlanWriteComponent,
    CompanyComponent,
    FindCompanyComponent,
    FooterComponent,
    MypageComponent,
    DetailCompanyComponent,
    LogoutComponent,
    DetailCompanyComponent,
    DetailTipsComponent,
    DetailReviewComponent,
    DetailPlanComponent,
    EditCompanyComponent,
    EditReviewComponent,
    EditTipsComponent,
    UserdetailComponent,
    EditPlanComponent,
    ManageUserComponent,
    SearchTemaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    CKEditorModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
