import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { APP_ROUTES } from './routes';
import { EventsAppComponent } from './events-app.component';
import {
    EventsListComponent,
    CreateEventComponent,
    CreateEventDeactivateGuard,
    EventListResolver,
    EventThumbnailComponent,
    LocationValidator
} from './events/index';
import { NavBarComponent } from './nav/nav-bar.component';
import { EventService, DurationPipe } from './events/shared/index';
import {
    EventDetailsComponent,
    EventResolver,
    CreateSessionComponent,
    SessionListComponent,
    VoterService,
    UpvoteComponent
} from './events/event-details/index';
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
        ReactiveFormsModule,
        HttpModule
    ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavBarComponent,
        EventDetailsComponent,
        UpvoteComponent,
        SessionListComponent,
        CreateSessionComponent,
        CreateEventComponent,
        LocationValidator,
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
        VoterService,
        EventResolver,
        EventListResolver,
        EventRouteActivator,
        CreateEventDeactivateGuard
    ]
})
export class AppModule {

}