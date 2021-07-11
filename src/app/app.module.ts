import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { QueryboxComponent } from './querybox/querybox.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { SignupComponent } from './login/signup/signup.component';
import { ForgetPasswordComponent } from './login/forget-password/forget-password.component';
import { LoginUserComponent } from './login/login-user/login-user.component';
import { LoginEngineerComponent } from './login/login-engineer/login-engineer.component';
import { QueryComponent } from './login/query/query.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    QueryboxComponent,
    ContactComponent,
    AboutComponent,
    SignupComponent,
    ForgetPasswordComponent,
    LoginUserComponent,
    LoginEngineerComponent,
    QueryComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
