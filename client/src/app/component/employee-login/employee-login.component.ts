import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:3000/api/employee';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {

  loginPass: Boolean = false;

  dataLoginEm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
  }

  LoginEm(){
    const data = {
      password: this.dataLoginEm.value.password,
      username: this.dataLoginEm.value.username,
    };
    if(data.password !== '' && data.username !== '') {
      this.http.get(`${baseUrl}/${data.username}/${data.password}`)
        .subscribe(
          response => {
            console.log(response);
            this.loginPass = true;
            localStorage.setItem("Emusername",response['username']);
            localStorage.setItem("Empassword",response['password']);
            alert("Welcome To Employee!");
            this.router.navigate(['/addlist']);
          },
          error => {
            console.log(error);
          });
  }
  }

  get(id) {
    //return this.http.get(`${baseUrl}/${id}`);
  }


}
