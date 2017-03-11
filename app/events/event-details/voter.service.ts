import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { ISession } from '../shared/index';


@Injectable()
export class VoterService {
    constructor(private http: Http) { }

    deleteVote(eventId: number, session: ISession, voterName: string): void {
        session.voters = session.voters.filter(voter => voter !== voterName);

        let url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;

        this.http.delete(url)
            .catch(this.handleError)
            .subscribe();
    }

    addVote(eventId: number, session: ISession, voterName: string): void {
        session.voters.push(voterName);

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;

        this.http.post(url, {}, options)
            .catch(this.handleError)
            .subscribe();
    }

    hasUserVoted(session: ISession, voterName: string): boolean {
        return session.voters
            .some(voter => voter === voterName);

    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}