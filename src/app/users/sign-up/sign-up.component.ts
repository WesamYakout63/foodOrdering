import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordValidator } from '../passwordValidator';
import { User } from '../user.model';
import { userService } from '../user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(private userService : userService) { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      'username': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
      'password': new FormControl(null, [Validators.required,
      passwordValidator.patternValidator(/\d/, { hasNumber: true }),
      passwordValidator.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
      passwordValidator.patternValidator(/[a-z]/, { hasSmallCase: true }), Validators.minLength(8), Validators.maxLength(12)]),
      'confirmPassword': new FormControl(null, [Validators.required, passwordValidator.mustMatch]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'phone': new FormControl(null, [Validators.required, passwordValidator.patternValidator(/^01[0-2]{1}[0-9]{8}$/, { notNumber: true })]),
      'address': new FormControl(null, Validators.required),
      'accept': new FormControl(null, Validators.required)
    });

    this.signUpForm.controls['password'].valueChanges.subscribe(
      () => this.signUpForm.controls['confirmPassword'].updateValueAndValidity()
    );
  }

  onSubmit() {
    const user: User = new User(this.signUpForm.get('username').value, this.signUpForm.get('email').value,
      this.signUpForm.get('password').value, this.signUpForm.get('phone').value, this.signUpForm.get('address').value);
    this.userService.addNewUser(user);
    this.signUpForm.reset();
  }

}
