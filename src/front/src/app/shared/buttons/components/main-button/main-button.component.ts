import { Component, Input } from '@angular/core';
import { BaseButton } from 'app/shared/buttons/models/base-button';
import { transitionEaseOut } from 'styles/animations';

@Component({
    selector: 'bar-main-button',
    templateUrl: './main-button.component.html',
    styleUrls: ['./main-button.component.scss'],
    animations: [transitionEaseOut()]
})
export class MainButtonComponent extends BaseButton {
    @Input() contentStyle: object;

    constructor() {
        super();
    }

    public onClick(event: Event): void {
        this.clickHandler.emit();
    }

}
