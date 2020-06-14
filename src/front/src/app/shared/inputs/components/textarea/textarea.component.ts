import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'bar-textarea',
    templateUrl: './textarea.component.html',
    styleUrls: ['./textarea.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => TextareaComponent),
            multi: true
        }
    ]
})
export class TextareaComponent implements ControlValueAccessor {
    @Input() placeholder: string;
    @Input() disabled: boolean;
    @Input() columns = 1;
    @Input() rows = 4;
    @Input() hasErrors: boolean;

    public val: string;

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
