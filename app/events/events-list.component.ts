import { Component, OnInit } from '@angular/core';

import { EventThumbnailComponent } from './event-thumbnail.component';
import { EventService, IEvent } from './shared/index';


@Component({
    selector: "events-list",
    template: `
        <div>
            <h1>Put events here</h1>
            <hr/>
            <div class="row">
                <div class="col-md-5" *ngFor="let event of events">
                    <event-thumbnail [event]="event"></event-thumbnail>
                </div>
            </div>
        </div>
    `
})
export class EventsListComponent implements OnInit {
    events: IEvent[];

    constructor(private eventService: EventService  ) { }

    ngOnInit(): void {
        this.eventService.getEvents()
            .subscribe(events => { this.events = events });
    }
}