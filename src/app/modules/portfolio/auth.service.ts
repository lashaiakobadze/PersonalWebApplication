import { Injectable } from '@angular/core';
import { ProjectsService } from './projects.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    loggedIn = false;

    constructor(private projectsService: ProjectsService) { }

    isAuthenticated() {
        const promise = new Promise(
            (resolve, reject) => {
                setTimeout(() => {
                    resolve(this.loggedIn);
                }, 800)
            }
        );
        return promise;
    }

    login() {
        this.loggedIn = true;
    }

    logout() {
        this.loggedIn = false;
    }
}