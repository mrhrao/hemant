import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { SettingComponent } from './setting/setting.component';
import { BuyComponent } from './buy/buy.component';
import { SellComponent } from './sell/sell.component';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashbord',component: DashbordComponent },
  { path: 'resetPassword',component: ResetPasswordComponent },
  { path: 'forgetPassword',component: ForgetPasswordComponent },
  { path: 'setting',component: SettingComponent },
  { path: 'buy',component: BuyComponent },
  { path: 'sell',component: SellComponent },

  
 { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: '**', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    DashbordComponent,
    ResetPasswordComponent,
    ForgetPasswordComponent,
    SettingComponent,
    BuyComponent,
    SellComponent
  ],
    imports: [
      RouterModule.forRoot(
        appRoutes,
       ),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
