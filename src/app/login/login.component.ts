import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", Validators.required)
  })

  constructor() { }

  ngOnInit() {
  }

  submit(f) {
    console.log(f);
  }

  get email() {
    return this.form.get("email");
  }

  get password() {
    return this.form.get("password");
  }

}
