import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})
export class RegistryComponent implements OnInit {
  unamePattern = "^[A-Za-z0-9_-]{8,15}$";

  registerForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl('',[Validators.required, Validators.pattern(this.unamePattern)]),
    sex: new FormControl(''),
    check: new FormControl(''),
    email: new FormControl('',[Validators.required, Validators.email]),
    address: new FormGroup({ 
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });

  get email(){ return this.registerForm.get('email'); }
  get password(){ return this.registerForm.get('password'); }

  constructor() { }

  ngOnInit(): void {
  }

}
