import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { timeout } from 'rxjs/internal/operators/timeout';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor() { }

    public login(data: any): Observable<any> {
        return of(null).pipe(timeout(500));
    }

    public sendPassword(data: any): Observable<any> {
        return of(null).pipe(timeout(500));
    }
}
