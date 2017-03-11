import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CreateEventComponent } from './create-event.component';

/**
 * Acts as Route Deactivator, which exeuctes logic to guard agaist route deactivation
 */
export class CreateEventDeactivateGuard implements CanDeactivate<CreateEventComponent> {
    canDeactivate(component: CreateEventComponent, route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (component.isDirty)
            return window.confirm("Are you sure you want to exit without saving changes?");

        return true;
    }
}
