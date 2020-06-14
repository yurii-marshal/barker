import { Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
    selector: '[barClickOutside]'
})
export class ClickOutsideDirective {

    constructor(private elementRef: ElementRef) { }

    @Output() clickOutside: EventEmitter<any> = new EventEmitter();

    @HostListener('document:click', ['$event.target']) onMouseEnter(targetElement: HTMLElement) {
        const clickedInside = this.elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.clickOutside.emit();
        }
    }

}
