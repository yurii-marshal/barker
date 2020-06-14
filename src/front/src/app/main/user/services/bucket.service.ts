import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BucketService {

    public bucketCount$ = new Observable<number>(observer => {
        setInterval(() => observer.next(3), 1000);
    });

    constructor() { }
}
