import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'bar-list-box-item',
    templateUrl: './list-box-item.component.html',
    styleUrls: ['./list-box-item.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => ListBoxItemComponent),
            multi: true
        }
    ]
})
export class ListBoxItemComponent implements ControlValueAccessor {
    @Input() name?: string;
    @Input() id?: string;
    @Input() disabled?: boolean;
    @Input() darkMode?: boolean;

    @Output() changeHandler = new EventEmitter<{ id: string, value: boolean }>();

    private innerValue: boolean;

    onChange: (value?: any) => void;

    onTouched: (value?: any) => void;

    get value(): boolean {
        return this.innerValue;
    }

    set value(value: boolean) {
        this.innerValue = value;
        if (this.onChange) {
            this.onChange(value);
        }
    }

    constructor() { }

    emitChangeEvent(value: boolean): void {
        this.changeHandler.emit({ id: this.id, value });
    }

    setLabel(value: boolean): void {
        this.value = value;
        this.changeHandler.emit({ id: this.id, value });
    }

    writeValue(val: boolean): void {
        this.value = val;
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }
}
