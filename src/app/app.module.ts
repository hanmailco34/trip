import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import {FormsModule} from'@angular/forms';
import {HttpClientModule} from'@angular/common/http';
import { MainComponent } from './user/main/main.component';
import { SlidersComponent } from './user/sliders/sliders.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    SlidersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
