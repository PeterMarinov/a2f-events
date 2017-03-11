import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { EventService, IEvent } from '../shared/index';

@Injectable()
export class EventResolver implements Resolve<IEvent> {
    constructor(private eventService: EventService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IEvent> {
        return this.eventService.getEvent(+route.params['id']);
    }
}