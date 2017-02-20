import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable()
export class AuthService {
    currentUser: IUser;

    loginUser(username: string, password: string): void {
        this.currentUser = {
            id: 1,
            firstName: "Peter",
            lastName: "Marinov",
            userName: "petermarinov"
        }
    }

    editCurrentUser(firstName: string, lastName: string): void {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    }

    isAuthenticated(): boolean {
        return !!this.currentUser;
    }
}