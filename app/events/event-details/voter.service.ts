import { Injectable } from '@angular/core';

import { ISession } from '../shared/index';


@Injectable()
export class VoterService {
    deleteVote(session: ISession, voterName: string): void {
        session.voters = session.voters
            .filter(voter => voter !== voterName);
    }

    addVote(session: ISession, voterName: string): void {
        session.voters
            .push(voterName);
    }

    hasUserVoted(session: ISession, voterName: string): boolean {
        return session.voters
            .some(voter => voter === voterName);

    }
}