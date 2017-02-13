import { Component, OnInit } from '@angular/core';

import { EventThumbnailComponent } from './event-thumbnail.component';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';


@Component({
    selector: "events-list",
    template: `
        <div>
            <h1>Put events here</h1>
            <hr/>
            <div class="row">
                <div class="col-md-5" *ngFor="let event of events">
                    <event-thumbnail [event]="event" (click)="eventClick(event.name)"></event-thumbnail>
                </div>
            </div>
        </div>
    `
})
export class EventsListComponent implements OnInit {
    events: any[];

    constructor(private eventService: EventService, private toastrService: ToastrService) { }

    ngOnInit(): void {
        this.events = this.eventService.getEvents();
    }

    eventClick(name: string): void{
        this.toastrService.info(name);
    }
}