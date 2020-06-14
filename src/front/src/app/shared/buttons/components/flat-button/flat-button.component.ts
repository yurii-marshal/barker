import { Component, Input } from '@angular/core';
import { BaseButton } from 'app/shared/buttons/models/base-button';
import { transitionEaseOut } from 'styles/animations';

@Component({
    selector: 'bar-flat-button',
    templateUrl: './flat-button.component.html',
    styleUrls: ['./flat-button.component.scss'],
    animations: [transitionEaseOut()]
})
export class FlatButtonComponent extends BaseButton {
    @Input() public darkMode: boolean;
    @Input() public rounded: boolean;

    constructor() {
        super();
    }

    public onClick(event: Event): void {
        this.clickHandler.emit();
    }

}
