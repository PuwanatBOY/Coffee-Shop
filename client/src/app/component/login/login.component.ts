import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  googleUrl: string;
  facebookUrl: string;

  constructor() { }

  ngOnInit(): void {
    this.googleUrl="http://www.google.com";
    this.facebookUrl="http://www.facebook.com";
  }

  getUrlFacebook(){
    return this.facebookUrl;
  }

}
