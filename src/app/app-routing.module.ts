import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';

import { QueryboxComponent } from './querybox/querybox.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { SignupComponent } from './login/signup/signup.component';
import { ForgetPasswordComponent } from './login/forget-password/forget-password.component';
import { LoginUserComponent } from './login/login-user/login-user.component';
import { LoginEngineerComponent } from './login/login-engineer/login-engineer.component';
import { QueryComponent } from './login/query/query.component';


const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login-user', component: LoginUserComponent },
  { path: 'login-engineer', component: LoginEngineerComponent },
  { path: 'forget-password', component: ForgetPasswordComponent },
  { path: 'welcome-user', component: QueryboxComponent },
  { path: 'welcome-engineer', component: QueryComponent },
  { path: '', redirectTo: '/home',  pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
