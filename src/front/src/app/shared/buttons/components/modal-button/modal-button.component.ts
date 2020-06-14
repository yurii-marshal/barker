import { Component, Input } from '@angular/core';
import { BaseButton } from 'app/shared/buttons/models/base-button';
import { transitionEaseOut } from 'styles/animations';

@Component({
    selector: 'bar-modal-button',
    templateUrl: './modal-button.component.html',
    styleUrls: ['./modal-button.component.scss'],
    animations: [transitionEaseOut()]
})
export class ModalButtonComponent extends BaseButton {
    @Input() public secondary: boolean;

    constructor() {
        super();
    }

    public onClick(event: Event): void {
        this.clickHandler.emit();
    }

}
