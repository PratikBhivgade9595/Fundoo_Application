import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './component/registration/registration.component';
import {MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { ForgetEmailComponent } from './component/forget-email/forget-email.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    ForgetEmailComponent,
    ResetPasswordComponent,
    LoginPageComponent,
    DashboardComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
