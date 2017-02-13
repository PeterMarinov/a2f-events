import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { USER_ROUTES } from './user.routes';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(USER_ROUTES)
    ],
    declarations: [
        ProfileComponent
    ],
    providers: []
})
export class UserModule {

}