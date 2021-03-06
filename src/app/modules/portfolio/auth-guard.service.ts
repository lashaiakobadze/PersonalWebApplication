import { 
    ActivatedRouteSnapshot, 
    CanActivate, 
    CanActivateChild, 
    Router, 
    RouterStateSnapshot 
} from "@angular/router";

import { ProjectsService } from './projects.service';

import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';


@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
    constructor(private authService: AuthService, private router: Router, projectsService: ProjectsService) {}

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {  
        return this.authService.isAuthenticated()
            .then(
                (autenticated: boolean) => {
                    if(autenticated) {
                        return true;
                    } else {
                        this.router.navigate(['/portfolio/all']);
                    }
                }
            )
    }

    canActivateChild(route: ActivatedRouteSnapshot,
                    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.canActivate(route, state);
    }
}