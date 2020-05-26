import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { RegistryComponent } from './component/registry/registry.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddListComponent } from './component/add-list/add-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistryComponent,
    AddListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    FileUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
