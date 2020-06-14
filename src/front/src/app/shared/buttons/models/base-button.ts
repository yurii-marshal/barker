import { EventEmitter, Input, Output } from '@angular/core';

export abstract class BaseButton {
    @Input() public disabled = false;
    @Input() public type: 'button' | 'submit' = 'button';
    @Output() public clickHandler: EventEmitter<any> = new EventEmitter();

    public abstract onClick(event: any): void;
}
