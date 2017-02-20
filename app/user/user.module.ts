import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProfileComponent } from './profile.component';
import { LoginComponent } from './login.component';

import { USER_ROUTES } from './user.routes';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(USER_ROUTES),
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        ProfileComponent,
        LoginComponent
    ],
    providers: []
})
export class UserModule {

}