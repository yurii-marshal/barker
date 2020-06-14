import { Component, Input } from '@angular/core';
import { BaseButton } from 'app/shared/buttons/models/base-button';
import { transitionEaseOut } from 'styles/animations';

@Component({
    selector: 'bar-ref-button',
    templateUrl: './ref-button.component.html',
    styleUrls: ['./ref-button.component.scss'],
    animations: [transitionEaseOut()]
})
export class RefButtonComponent extends BaseButton {
    @Input() primary = true;
    @Input() customStyles: object;
    @Input() arrow = true;

    constructor() {
        super();
    }

    public onClick(event: Event): void {
        this.clickHandler.emit();
    }

}
