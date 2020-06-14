import { Component, Input, ViewChild } from '@angular/core';
import { accordionEnterLeave, enterLeave } from 'styles/animations';

import { Order } from '../../../../main/user/models/order.model';
import { NguCarouselConfig, NguCarousel } from '@ngu/carousel';

@Component({
    selector: 'bar-history-item',
    templateUrl: './history-item.component.html',
    styleUrls: ['./history-item.component.scss'],
    animations: [accordionEnterLeave, enterLeave]
})
export class HistoryItemComponent {
    public isActive = false;

    @Input()
    item: Order;

    public carouselConfig: NguCarouselConfig = {
        grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
        load: this.item?.items.length,
        loop: true,
        touch: true,
        velocity: 0.2,
        point: {
            visible: true,
            hideOnSingleSlide: true
        }
    };

    @ViewChild('historyDeliverySlider') historyDeliverySlider: NguCarousel<any>;

    constructor() { }

}
