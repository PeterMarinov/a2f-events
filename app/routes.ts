import { Route } from '@angular/router';
import { EventsListComponent } from './events/events-list.component';
import { EventDetailsComponent, CreateSessionComponent } from './events/event-details/index';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';

export const APP_ROUTES: Route[] = [
    { path: 'events', component: EventsListComponent },
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events/session/new', component: CreateSessionComponent },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: '404', component: Error404Component },
    { path: 'user', loadChildren: 'app/user/user.module#UserModule' }
]