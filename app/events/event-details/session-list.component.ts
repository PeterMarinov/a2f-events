import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { ISession } from '../shared/index';
import { VoterService } from './voter.service';
import { AuthService } from '../../user/auth.service';


@Component({
    selector: 'session-list',
    templateUrl: 'app/events/event-details/session-list.component.html'
})
export class SessionListComponent implements OnChanges {
    @Input() sessions: ISession[];
    @Input() filterBy: string;
    @Input() sortBy: string;
    @Input() eventId: number;
    visibleSessions: ISession[] = [];

    constructor(
        private authService: AuthService,
        private voterService: VoterService
    ) { }

    ngOnChanges(changes: SimpleChanges): void {
        if (this.sessions) {
            this.filterSessions(this.filterBy);
            this.sortBy === 'name' ? this.visibleSessions.sort(SortByNameAsc) : this.visibleSessions.sort(SortByVotesDesc);
        }
    }

    /**
     * Toggles the user vote: +1 vote if user has not voted and -1 vote if the user has alredy voted
     * @param session The session for shich the vote of the user needs to be toggled (voted/unvoted)
     */
    toggleVote(session: ISession): void {
        if (this.userHasVoted(session)) {
            this.voterService.deleteVote(this.eventId, session, this.authService.currentUser.userName);
        } else {
            this.voterService.addVote(this.eventId, session, this.authService.currentUser.userName);
        }

        if (this.sortBy === 'votes')
            this.visibleSessions.sort(SortByVotesDesc);
    }

    userHasVoted(sesion: ISession): boolean {
        let hasUserVoted = false;

        if (this.authService.isAuthenticated() && this.voterService.hasUserVoted(sesion, this.authService.currentUser.userName))
            hasUserVoted = true;

        return hasUserVoted;
    }

    filterSessions(filter: string): void {
        if (filter === 'all') {
            this.visibleSessions = this.sessions.slice(0);
        } else {
            this.visibleSessions = this.sessions
                .filter(s => s.level.toLocaleLowerCase() === filter);
        }
    }
}

export function SortByNameAsc(s1: ISession, s2: ISession): number {
    if (s1.name > s2.name)
        return 1;
    else if (s1 === s2)
        return 0;
    else
        return -1;
}

export function SortByVotesDesc(s1: ISession, s2: ISession): number {
    return s2.voters.length - s1.voters.length;
}