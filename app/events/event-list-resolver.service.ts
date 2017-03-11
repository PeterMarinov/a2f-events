import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';
import { EventService, IEvent } from './shared/index';



@Injectable()
export class EventListResolver implements Resolve<IEvent[]> {
    constructor(private eventService: EventService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<IEvent[]> {
        return this.eventService.getEvents();
    }
}