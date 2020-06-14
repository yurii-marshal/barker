import { Component, forwardRef, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { Option } from 'app/shared/inputs/models/option.model';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { isoDateRegExp } from 'app/core/regexps';

@Component({
    selector: 'bar-date-selector',
    templateUrl: './date-selector.component.html',
    styleUrls: ['./date-selector.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DateSelectorComponent),
            multi: true
        }
    ]
})
export class DateSelectorComponent implements OnInit, OnDestroy, ControlValueAccessor {
    private readonly currentYear: number = new Date().getFullYear();
    private dayController: FormControl = new FormControl(null, Validators.required);
    private monthController: FormControl = new FormControl(null, Validators.required);
    private yearController: FormControl = new FormControl(null, Validators.required);
    private subs: Subscription[] = [];

    public parsedFormat = [];

    public years: Option[] = this.getPossibleYears();
    public months: Option[] = this.getPossibleMonths();
    public days: Option[] = this.setDays(0, this.currentYear);

    public birth: FormGroup = new FormGroup({
        day: this.dayController,
        month: this.monthController,
        year: this.yearController
    });

    @Input() petName: string;

    @Input() format = 'dd/MM/yyyy';

    constructor() { }

    onChange = (value: string) => { };

    onTouch = (value: string) => { };

    writeValue(date: string): void {
        if (date && !isoDateRegExp.test(date)) {
            throw new Error(`Invalid date format: ${date}`);
        }

        if (date) {
            const [year, month, day] = date.split('-');

            this.birth.setValue(
                {
                    year: this.years.find(y => y.value === Number(year)),
                    month: this.months.find(m => m.value === Number(month)),
                    day: this.days.find(d => d.value === Number(day))
                }
            );
        }

        this.onChange(date);
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouch = fn;
    }

    public ngOnInit(): void {
        this.parsedFormat = this.format.split('/');

        if (this.parsedFormat[0] === 'dd') {
            this.subs.push(this.initDaySub());
        }

        if (this.parsedFormat[1] === 'MM') {
            this.subs.push(this.initMonthSub());
        }

        if (this.parsedFormat[1] === 'yyyy') {
            this.subs.push(this.initYearSub());
        }
    }

    public ngOnDestroy(): void {
        this.subs.forEach(sub => sub?.unsubscribe());
    }

    private updateDays(): void {
        const selectedYear = this.yearController.value;
        const selectedMonth = this.monthController.value;

        this.days = this.setDays(selectedMonth.value, selectedYear.value);

        this.checkDateRange();
    }

    private checkDateRange(): void {
        const selectedDay = this.dayController.value;

        if (!selectedDay) {
            return;
        }
        const lastDay = this.days[this.days.length - 1];

        if (lastDay.value < selectedDay.value) {
            this.dayController.patchValue(lastDay);
        }
    }

    private getPossibleMonths(): Option[] {
        const months = [
            'Января',
            'Февраля',
            'Марта',
            'Aпреля',
            'Мая',
            'Июня',
            'Июля',
            'Августа',
            'Сентября',
            'Октября',
            'Ноября',
            'Декабря'
        ].map((x, i) => ({ value: i, label: x }));

        return months;
    }

    private emitValue(value: { day: Option, month: Option, year: Option }) {
        const date = `${value.year?.value}-${value.month?.value + 1}-${value.day?.value}`;

        if (/\d{4}-\d{1,2}-\d{1,2}/.test(date)) {
            this.onChange(date);
        } else {
            this.onChange(null);
        }
    }

    private initYearSub(): Subscription {
        return this.yearController.valueChanges
            .pipe(
                filter(() => this.monthController.value)
            ).subscribe(() => {
                this.updateDays();
            });
    }

    private initMonthSub(): Subscription {
        return this.monthController.valueChanges
            .pipe(
                filter(() => this.yearController.value)
            )
            .subscribe(() => {
                this.updateDays();
            });
    }

    private initDaySub(): Subscription {
        return this.birth.valueChanges
            .subscribe(value => {
                this.emitValue(value);
            });
    }

    /**
     * @param month - range (0 - 11)
     * @param year - range (1 - 31) and depends on month.
     */
    private daysInMonth(month: number, year: number): number {
        return new Date(year, month + 1, 0).getDate();
    }

    private setDays(month: number, year: number): Option[] {
        return Array(this.daysInMonth(month, year))
            .fill(null)
            .map((x, i) => ({ value: i + 1, label: String(i + 1) }));
    }

    private getPossibleYears(): Option[] {
        return Array(20) // 20 - Max dog age.
            .fill(new Date().getFullYear())
            .map((x, i) => ({ value: x - i, label: String(x - i) }));
    }
}
