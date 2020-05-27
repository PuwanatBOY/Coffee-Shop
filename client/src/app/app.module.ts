import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { RegistryComponent } from './component/registry/registry.component';
//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddListComponent } from './component/add-list/add-list.component';
<<<<<<< HEAD
import { ProductListComponent } from './component/product-list/product-list.component';
=======
import { EmployeeLoginComponent } from './component/employee-login/employee-login.component';
>>>>>>> close #12 -add login employee

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistryComponent,
    AddListComponent,
<<<<<<< HEAD
    ProductListComponent
=======
    EmployeeLoginComponent
>>>>>>> close #12 -add login employee
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    //FontAwesomeModule,
    FileUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
