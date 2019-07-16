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
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { TipsComponent } from './community/tips/tips.component';
import { TipsWriteComponent } from './community/tips/tips-write/tips-write.component';
import { ReviewWriteComponent } from './community/tour-review/review-write/review-write.component';
import { TestScrollerComponent } from './test-scroller/test-scroller.component';
import { MenuComponent } from './menu/menu.component';


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
    TestScrollerComponent,
    MenuComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    CKEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
