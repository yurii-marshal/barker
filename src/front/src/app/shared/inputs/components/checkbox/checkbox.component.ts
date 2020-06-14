import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'bar-checkbox',
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => CheckboxComponent),
            multi: true
        }
    ]
})

export class CheckboxComponent implements ControlValueAccessor {
    @Input() name?: string;
    @Input() id?: string;

    public disabled: boolean;
    private innerValue: boolean;

    onChange: (val: boolean) => void;

    onTouched: (val: boolean) => void;

    get value() {
        return this.innerValue;
    }

    set value(value: any) {
        this.innerValue = value;
        if (this.onChange) {
            this.onChange(value);
        }
    }

    constructor() { }

    public writeValue(val: boolean): void {
        this.value = val;
    }

    public registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    public registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    public setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

}
