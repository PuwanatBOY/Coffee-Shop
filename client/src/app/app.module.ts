import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { RegistryComponent } from './component/registry/registry.component';
//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddListComponent } from './component/add-list/add-list.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { EmployeeLoginComponent } from './component/employee-login/employee-login.component';
import { ShowListComponent } from './component/show-list/show-list.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistryComponent,
    AddListComponent,
    ProductListComponent,
    EmployeeLoginComponent,
    ShowListComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    //FontAwesomeModule,
    FileUploadModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
