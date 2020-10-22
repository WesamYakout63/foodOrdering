import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { passwordValidator } from '../passwordValidator'
import { userService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logInForm : FormGroup;
  
  constructor(private userService : userService , private router: Router) { }

  ngOnInit(): void {
    this.logInForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required,
        passwordValidator.patternValidator(/\d/, { hasNumber: true }),
        passwordValidator.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
        passwordValidator.patternValidator(/[a-z]/, { hasSmallCase: true }), Validators.minLength(8), Validators.maxLength(12)]
    )});
  }

  onSubmit() {
    this.userService.login(this.logInForm.get('email').value , this.logInForm.get('password').value);
  }

  signUp() {
    this.router.navigate(['signUp']);
  }

}
