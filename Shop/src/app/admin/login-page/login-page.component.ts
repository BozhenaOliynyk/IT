import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})



export class LoginPageComponent {
  // form: FormGroup | undefined                               //вказуємо шо може шось і не прийти, можна запхати в конструктор
  // constructor() {
  //   form: FormGroup
  // }

  form!: FormGroup;
  text: string = "hello";
  submitted = false;
  constructor() { };

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)])
    })
  }
  submit() { }
}