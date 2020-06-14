import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
    selector: 'bar-registration-progress-bar',
    templateUrl: './registration-progress-bar.component.html',
    styleUrls: ['./registration-progress-bar.component.scss']
})
export class RegistrationProgressBarComponent implements AfterViewInit {
    @Input()
    public set percent(value: number) {
        this.setPercent(value);
        this.innerPercent = value;
    }
    @ViewChild('percentLine')
    public percentLine: ElementRef;

    private readonly DASHARRAY = 663;
    private innerPercent = 0;

    constructor() {}

    ngAfterViewInit(): void {
        this.setPercent(this.innerPercent);
    }

    private setPercent(percent: number) {
        const percentLine = this.percentLine?.nativeElement;

        if (!percentLine) {
            return;
        }

        const value =
            this.DASHARRAY - Math.floor((this.DASHARRAY / 100) * percent);

        percentLine.setAttribute('stroke-dashoffset', value);
    }
}
