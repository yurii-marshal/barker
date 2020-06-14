import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class UserGuard implements CanActivate, CanActivateChild {

    constructor(private router: Router) {
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        if (false) {
            this.router.navigate(['login'], { queryParams: {} });
            return false;
        }

        return true;
    }

    canActivateChild(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        if (false) {
            this.router.navigate(['login'], { queryParams: {} });
            return false;
        }

        return true;
    }
}
