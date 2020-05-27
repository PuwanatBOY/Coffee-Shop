import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component'
import { RegistryComponent } from './component/registry/registry.component'
import { AddListComponent } from './component/add-list/add-list.component'
<<<<<<< HEAD
import { ProductListComponent } from './component/product-list/product-list.component'
=======
import { EmployeeLoginComponent } from './component/employee-login/employee-login.component'
>>>>>>> close #12 -add login employee


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'registry', component: RegistryComponent},
  { path: 'addlist', component: AddListComponent},
  { path: 'home', component: LoginComponent },
<<<<<<< HEAD
  { path: 'productlist', component: ProductListComponent},
=======
  { path: 'loginem', component: EmployeeLoginComponent}
>>>>>>> close #12 -add login employee

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
