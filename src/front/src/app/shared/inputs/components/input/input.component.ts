import { Component, forwardRef, Input, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'bar-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputComponent),
            multi: true
        }
    ]
})
export class InputComponent implements ControlValueAccessor {
    @Input() placeholder = '';
    @Input() disabled: boolean;
    @Input() styleInput: any;
    @Input() type: 'text' | 'number' = 'text';
    @Input() hasErrors: boolean;
    @Input() maxLength: number;

    @Output() keyEnter: EventEmitter<any> = new EventEmitter();

    private val: string;

    public get value(): string {
        return this.val;
    }

    public set value(val: string) {
        this.val = val;
        this.onChange(val);
        this.onTouch(val);
    }

    onChange: any = () => { };

    onTouch: any = () => { };

    constructor() { }

    public eventEnter() {
        this.keyEnter.next();
    }

    writeValue(value: string): void {
        this.value = value;
    }
    registerOnChange(fn: any): void {
        this.onChange = fn;
    }
    registerOnTouched(fn: any): void {
        this.onTouch = fn;
    }
    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

}
