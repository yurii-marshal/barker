import { Component, Input } from '@angular/core';
import { transitionEaseOut } from 'styles/animations';

import { BaseButton } from '../../models/base-button';

@Component({
    selector: 'bar-back-button',
    templateUrl: './back-button.component.html',
    styleUrls: ['./back-button.component.scss'],
    animations: [transitionEaseOut()]
})
export class BackButtonComponent extends BaseButton {
    @Input() name = 'Назад';

    constructor() {
        super();
    }

    public onClick(event: Event): void {
        this.clickHandler.emit();
    }

}
