import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


import { AuthService } from './auth.service';

@Component({
  templateUrl: "./app/user/profile.component.html"
})
export class ProfileComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) { }

  profileForm: FormGroup;

  ngOnInit(): void {
    let firstNameControl: FormControl = new FormControl(this.authService.currentUser.firstName);
    let lastNameControl: FormControl = new FormControl(this.authService.currentUser.lastName);

    this.profileForm = new FormGroup({
      firstName: firstNameControl,
      lastName: lastNameControl
    })
  }

  submitForm(formValues: any): void {
    this.authService.editCurrentUser(formValues.firstName, formValues.lastName);
    this.router.navigate(["events"]);
  }

  cancelForm(): void {
    this.router.navigate(["events"]);
  }
}