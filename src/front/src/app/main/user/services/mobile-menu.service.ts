import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MobileMenuService {

    public switchMenu$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    public menuState$: Observable<boolean> = this.switchMenu$.asObservable();

    constructor() { }
}
