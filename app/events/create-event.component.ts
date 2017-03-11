import { Component } from '@angular/core'
import { Router } from '@angular/router';

import { EventService } from '../events/shared/event.service';


@Component({
    templateUrl: "app/events/create-event.component.html",
    styles: [`
    em { float: right; color: #E05C65; padding-left: 10px;}
    .error input { background-color: #E3C3C5;}
    .error ::webkit-input-placeholder {color #999;}
    .error ::-moz-placeholder {color #999;}
    .error :-moz-input-placeholder {color #999;}
    .error :ms-input-placeholder {color #999;}
  `]
})
export class CreateEventComponent {
    constructor(private router: Router, private eventService: EventService) { }

    isDirty: boolean = true;

    saveEvent(formValues: any): void {
        this.eventService.saveEvent(formValues)
            .subscribe((event) => {
                this.router.navigate(['events']);
                this.isDirty = false;
            });
    }   


    cancel(): void {
        this.router.navigate(['events']);
    }
}