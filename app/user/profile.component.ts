import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


import { AuthService } from './auth.service';

@Component({
  templateUrl: "./app/user/profile.component.html",
  styles: [`
    em { float: right; color: #E05C65; padding-left: 10px;}
    .error input { background-color: #E3C3C5;}
    .error ::webkit-input-placeholder {color #999;}
    .error ::-moz-placeholder {color #999;}
    .error :-moz-input-placeholder {color #999;}
    .error :ms-input-placeholder {color #999;}
  `]
})
export class ProfileComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) { }

  profileForm: FormGroup;
  firstNameControl: FormControl;
  lastNameControl: FormControl;

  ngOnInit(): void {
    this.firstNameControl = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastNameControl = new FormControl(this.authService.currentUser.lastName, Validators.required);

    this.profileForm = new FormGroup({
      firstName: this.firstNameControl,
      lastName: this.lastNameControl
    })
  }

  submitForm(formValues: any): void {
    if (this.profileForm.valid) {
      this.authService.editCurrentUser(formValues.firstName, formValues.lastName);
      this.router.navigate(["events"]);
    }
  }

  cancelForm(): void {
    this.router.navigate(["events"]);
  }

  validateFistNameControl(): boolean {
    return this.firstNameControl.untouched || this.firstNameControl.valid;
  }

  validateLastNameControl(): boolean {
    return this.lastNameControl.untouched || this.lastNameControl.valid;
  }
}