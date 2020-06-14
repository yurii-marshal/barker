import { Component, Input } from '@angular/core';
import { transitionEaseOut } from 'styles/animations';

import { BaseButton } from '../../models/base-button';

@Component({
    selector: 'bar-action-button',
    templateUrl: './action-button.component.html',
    styleUrls: ['./action-button.component.scss'],
    animations: [
        transitionEaseOut('customThemeTransition', 0.1),
        transitionEaseOut()
    ]
})
export class ActionButtonComponent extends BaseButton {
    @Input() public arrow: boolean;

    constructor() {
        super();
    }

    public onClick(event: Event): void {
        this.clickHandler.emit();
    }

}
