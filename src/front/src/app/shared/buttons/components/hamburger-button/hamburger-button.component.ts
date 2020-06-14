import { Component } from '@angular/core';

import { BaseButton } from '../../models/base-button';

@Component({
    selector: 'bar-hamburger-button',
    templateUrl: './hamburger-button.component.html',
    styleUrls: ['./hamburger-button.component.scss']
})
export class HamburgerButtonComponent extends BaseButton {

    constructor() {
        super();
    }

    public onClick(event: Event): void {
        this.clickHandler.emit();
    }

}
