import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'bar-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
    @Input() minimum = 1;
    @Input() maximum: number;

    @Input()
    get value(): number {
        return this.counterValue;
    }
    set value(val: number) {
        this.counterValue = val;
        this.valueChange.emit(this.counterValue);
    }

    @Output()
    valueChange: EventEmitter<number> = new EventEmitter();

    private counterValue = 1;

    constructor() { }

    ngOnInit(): void {
    }

    public decreaseCount(): void {
        if (this.value > this.minimum) {
            this.value--;
        }
    }

    public increaseCount(): void {
        if (!this.maximum || this.value < this.maximum) {
            this.value++;
        }
    }

}
