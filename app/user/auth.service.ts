import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { IUser } from './user.model';

@Injectable()
export class AuthService {
    constructor(private http: Http) { }

    currentUser: IUser;

    loginUser(userName: string, password: string): Observable<Response | boolean> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let loginInfo = { username: userName, password: password };

        return this.http.post('api/login', loginInfo, options)
            .do(response => {
                if (response) {
                    this.currentUser = response.json().user;
                }
            }).catch(error => {
                return Observable.of(false);
            })
    }

    logoutUser(): Observable<Response> {
        this.currentUser = undefined;

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post('/api/logout', {}, options);
    }

    editCurrentUser(firstName: string, lastName: string): Observable<Response> {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.put(`/api/users/${this.currentUser.id}`, this.currentUser, options);
    }

    isAuthenticated(): boolean {
        return !!this.currentUser;
    }

    checkAuthenticationStatus() {
        return this.http.get('api/currentIdentity')
            .map((response: any) => {
                return (response._body) ? response.json() : {};
            })
            .do(currentUser => {
                if (!!currentUser.userName)
                    this.currentUser = currentUser;
            }).subscribe();
    }
}