import {
    Directive, HostListener, Input
} from '@angular/core';

@Directive({
    selector: '[barMaxLength]'
})
export class MaxLengthDirective {

    @Input() barMaxLength: number;

    constructor() {
    }

    @HostListener('keypress', ['$event']) onKeyup(event: Event) {
        const element = event.target as HTMLInputElement;

        if (element.value.length === this.barMaxLength) {
            event.preventDefault();
        }
    }
}
