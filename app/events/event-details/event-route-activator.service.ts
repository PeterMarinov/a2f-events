import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { EventService } from '../shared/event.service';

/**
 * This class is example of Route Guard, but it is not used on the project since HTTP services were added for the eventService.getEvent(id: number) method
 */
@Injectable()
export class EventRouteActivator implements CanActivate {
    constructor(private eventService: EventService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        const eventExist = !!this.eventService.getEvent(+route.params['id']);
        
        if (!eventExist) 
            this.router.navigate(['/404']);

        return eventExist;
    }
}