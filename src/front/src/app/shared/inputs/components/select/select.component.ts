import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    EventEmitter,
    forwardRef,
    Input,
    OnDestroy,
    OnInit,
    Output,
    ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { fromEvent, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { Option } from '../../models/option.model';

@Component({
    selector: 'bar-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SelectComponent),
            multi: true
        }
    ]
})
export class SelectComponent implements OnInit, OnDestroy, ControlValueAccessor {
    @ViewChild('input')
    public input: ElementRef;

    @Input()
    public placeholder = 'Select';
    @Input()
    public isActiveInput = true;
    @Input()
    set options(values: Option[]) {
        this.innerOptions = values;
        this.filteredOptions = [...values];
    }
    get options() {
        return this.innerOptions;
    }
    @Input()
    public selected: Option;

    @Input()
    textAlign: 'left' | 'center' = 'left';

    @Output()
    public selectedChange: EventEmitter<Option> = new EventEmitter();

    public filteredOptions: Option[] = [];
    public isOpened = false;

    private innerOptions: Option[] = [];
    private clickTracking$: Subscription;

    public set option(val: Option) {
        this.selected = val;
        this.onChange(val);
        this.onTouch(val);
    }

    constructor(private elementRef: ElementRef, private cd: ChangeDetectorRef) { }

    onChange: any = () => { };
    onTouch: any = () => { };

    writeValue(obj: Option): void {
        this.selected = obj || { value: '', label: '' };
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }
    registerOnTouched(fn: any): void {
        this.onTouch = fn;
    }

    public ngOnInit(): void {
        this.clickTracking$ = fromEvent(document, 'click')
            .pipe(map((event: any) => {
                const path = event?.path as HTMLElement[];
                const isClickInside = path.some(item => item === this.elementRef.nativeElement);

                return isClickInside;
            }))
            .subscribe(this.initTrackClicks);
    }

    public filterBy(value: string): void {
        this.filteredOptions = this.options.filter(o => o.label.toLowerCase().includes((value || '').toLowerCase()));
    }

    public selectFirst(): void {
        this.selected = this.filteredOptions[0] || null;
        this.input.nativeElement.blur();
        this.isOpened = false;
    }

    private initTrackClicks = (isInside: boolean) => {
        switch (true) {
            case isInside && !this.isOpened:
                this.isOpened = true;
                break;
            case !isInside:
                this.isOpened = false;
                break;
        }

        this.cd.detectChanges();
    }

    public ngOnDestroy(): void {
        this.clickTracking$?.unsubscribe();
    }

    public selectItem(event: Event, option: Option): void {
        event.stopPropagation();
        this.onChange(option);
        this.selectedChange.emit(option);
        this.selected = option;
        this.isOpened = false;
    }

    public toggle(event: Event): void {
        event.stopPropagation();

        this.isOpened = !this.isOpened;

        this.isOpened ? this.input.nativeElement.focus() : this.input.nativeElement.blur();
    }

    public trackByMethod(index: number, el: Option): number {
        return el.value;
    }

}
