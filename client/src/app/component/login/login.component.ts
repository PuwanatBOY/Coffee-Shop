import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/service/register.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  googleUrl: string;
  facebookUrl: string;

  dataLogin = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private registerService: RegisterService,private router: Router) { }

  loginPass: Boolean = false;

  ngOnInit(): void {
    this.googleUrl="http://www.google.com";
    this.facebookUrl="http://www.facebook.com";
  }

  getUrlFacebook(){
    return this.facebookUrl;
  }

  Login() {
    const data = {
      password: this.dataLogin.value.password,
      username: this.dataLogin.value.username,
    };
    if(data.password !== '' && data.username !== '') {
      this.registerService.findByUser(data.username, data.password)
        .subscribe(
          response => {
            console.log(response);
            this.loginPass = true;
            alert("i see!");
            this.router.navigate(['/addlist']);
          },
          error => {
            console.log(error);
          });
  }
}

}
