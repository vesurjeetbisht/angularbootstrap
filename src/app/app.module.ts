import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularWebStorageModule } from 'angular-web-storage';
import { routing } from './app.routing';
import { ToastrModule } from 'ng6-toastr-notifications';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './_layout/admin/admin.component';
import { AccountComponent } from './_layout/account/account.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';

import { InstructorComponent } from './instructor/instructor.component';
import { InstructorCreateComponent } from './instructor/create/create.component';
import { InstructorListComponent } from './instructor/list/list.component';
import { InstructorInfoComponent } from './instructor/info/info.component';

import { BookingComponent } from './booking/booking.component';
import { BookingListComponent } from './booking/list/list.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    LoginComponent,
    AccountComponent,
    RegisterComponent,
    InstructorComponent,
    InstructorCreateComponent,
    InstructorListComponent,
    InstructorInfoComponent,
    BookingListComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, HttpClientModule,AngularWebStorageModule,
    routing,ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
