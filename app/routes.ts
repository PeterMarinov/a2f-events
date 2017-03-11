import { Route } from '@angular/router';
import { EventDetailsComponent, CreateSessionComponent } from './events/event-details/index';
import { CreateEventComponent, EventsListComponent, EventListResolver, CreateEventDeactivateGuard } from './events/index';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator, EventResolver } from './events/event-details/index';

export const APP_ROUTES: Route[] = [
    { path: 'events', component: EventsListComponent, resolve: { events: EventListResolver } },
    { path: 'events/new', component: CreateEventComponent, canDeactivate: [CreateEventDeactivateGuard] },
    { path: 'events/session/new', component: CreateSessionComponent },
    { path: 'events/:id', component: EventDetailsComponent, resolve: { event: EventResolver } },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: '404', component: Error404Component },
    { path: 'user', loadChildren: 'app/user/user.module#UserModule' }
]