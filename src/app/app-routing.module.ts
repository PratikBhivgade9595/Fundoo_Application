import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllNotesComponent } from './component/all-notes/all-notes.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ForgetEmailComponent } from './component/forget-email/forget-email.component';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { NoteComponent } from './component/note/note.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { NoteDisplayComponent } from './component/note-display/note-display.component';
import { AllTrashNotesComponent } from './component/all-trash-notes/all-trash-notes.component';
import { AllArchiveComponent } from './component/all-archive/all-archive.component';

const routes: Routes = [
  {path:'register', component: RegistrationComponent},
  {path:'login', component: LoginPageComponent},
  {path:'email', component: ForgetEmailComponent},
  {path:'password', component: ResetPasswordComponent},
  {path:'dashboard', component: DashboardComponent,
   children: [
     {path:'', redirectTo:"dashboard/allnotes", pathMatch: 'full'},
     {path:"allnotes", component: AllNotesComponent},
     {path:"trash", component: AllTrashNotesComponent},
     {path:"archive", component: AllArchiveComponent}
   ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
