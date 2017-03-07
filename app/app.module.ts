import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { APP_ROUTES } from './routes';
import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/nav-bar.component';
import { EventService, DurationPipe } from './events/shared/index';
import {
    EventDetailsComponent,
    CreateSessionComponent,
    SessionListComponent
} from './events/event-details/index';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';

import {
    TOASTR_TOKEN, Toastr,
    JQ_TOKEN,
    CollapsibleWellCompomnent,
    SimpleModalComponent,
    ModalTriggerDirective
} from './common/index';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { AuthService } from './user/auth.service';

declare let toastr: Toastr;
declare let jQuery: Object;

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(APP_ROUTES),
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavBarComponent,
        EventDetailsComponent,
        SessionListComponent,
        CreateSessionComponent,
        CreateEventComponent,
        Error404Component,
        DurationPipe,
        CollapsibleWellCompomnent,
        SimpleModalComponent,
        ModalTriggerDirective
    ],
    bootstrap: [
        EventsAppComponent
    ],
    providers: [
        EventService,
        {
            provide: TOASTR_TOKEN,
            useValue: toastr
        },
        {
            provide: JQ_TOKEN,
            useValue: jQuery
        },
        AuthService,
        EventRouteActivator,
        {
            provide: 'canDeactivateCreateEvent',
            useValue: checkDirtyState
        }
    ]
})
export class AppModule {

}

function checkDirtyState(component: CreateEventComponent) {
    if (component.isDirty)
        return window.confirm("Are you sure you want to exit without saving changes?");

    return false;
}