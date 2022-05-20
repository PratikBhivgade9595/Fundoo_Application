import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetEmailComponent } from './component/forget-email/forget-email.component';
import { LoginComponent } from './component/login/login.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';

const routes: Routes = [
  {path:'register', component: RegistrationComponent},
  {path:'login', component: LoginComponent},
  {path:'email', component: ForgetEmailComponent},
  {path:'password', component: ResetPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
