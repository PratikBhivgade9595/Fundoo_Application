import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllNotesComponent } from './component/all-notes/all-notes.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ForgetEmailComponent } from './component/forget-email/forget-email.component';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { NoteComponent } from './component/note/note.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';

const routes: Routes = [
  {path:'register', component: RegistrationComponent},
  {path:'login', component: LoginPageComponent},
  {path:'email', component: ForgetEmailComponent},
  {path:'password', component: ResetPasswordComponent},
  {path:'dashboard', component: DashboardComponent,
  // children: [
  //   {path:'', redirectTo:"/dashboard/allnotes"},
  //   {path:'allnotes', component: AllNotesComponent}
  // ]
  },

  {path:'note', component: NoteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
