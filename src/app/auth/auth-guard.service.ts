import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    signedIn: boolean;
    user: any;

    constructor(private authServive: AuthService ,private router: Router) {
        this.signedIn = this.authServive.signedIn;
        this.user = this.authServive.user;
    }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        // return true if authenticated
        if (this.signedIn) {
            return true;
        } else {
            this.router.navigate(['/']);
            return false;
        }
    }
}