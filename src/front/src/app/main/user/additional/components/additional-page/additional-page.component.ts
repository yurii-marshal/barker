import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'bar-additional-page',
    templateUrl: './additional-page.component.html',
    styleUrls: ['./additional-page.component.scss']
})
export class AdditionalPageComponent implements OnInit {

    // TODO: call subscription from service
    public subscription = {
        endTime: '16:00',
        endWeekday: 'четверга'
    };

    constructor() { }

    ngOnInit(): void {
    }

}
