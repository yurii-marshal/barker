import { Component, OnInit, Output, Input, EventEmitter, ViewChild, forwardRef } from '@angular/core';
import { NguCarouselConfig, NguCarousel } from '@ngu/carousel';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'bar-timepicker-list',
    templateUrl: './timepicker-list.component.html',
    styleUrls: ['./timepicker-list.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => TimepickerListComponent),
            multi: true
        }
    ]
})
export class TimepickerListComponent implements ControlValueAccessor, OnInit {

    @Input() date: Date = new Date();

    @Output() chooseInterval: EventEmitter<{ date: string, time: string }> = new EventEmitter();

    @ViewChild('timepickerSlider') timepickerSlider: NguCarousel<any>;

    private timeIntervalList: string[] = [
        '09:00 - 12:00',
        '12:00 - 15:00',
        '15:00 - 18:00',
        '18:00 - 21:00'
    ];

    public dateList = [];

    public carouselConfig: NguCarouselConfig = {
        grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
        load: this.dateList.length,
        loop: false,
        touch: true,
        velocity: 0.2,
        point: {
            visible: true,
            hideOnSingleSlide: true
        }
    };

    onChange = (value: string) => { };

    onTouch = (value: string) => { };

    writeValue(day: string): void {
        // TODO: issue Late changes of date, use changeDetector?
        this.emitDateAndTime({ date: this.date }, null);
        this.initTimeList(this.date);
        this.onChange(day);
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouch = fn;
    }

    constructor() {
    }

    ngOnInit(): void {
        this.initTimeList(this.date);
    }

    public emitDateAndTime(slide: any, interval: any): void {
        this.dateList.forEach((i: any) => {
            if (slide && i.date === slide.date) {
                i.timeList.forEach((j: any) => {
                    if (interval && j.label !== interval.label) {
                        j.value = false;
                    }
                });
            } else {
                i.timeList.forEach((j: any) => j.value = false);
            }
        });

        this.chooseInterval.next({ date: slide.date, time: interval?.value ? interval?.label : '' });
    }

    private initTimeList(currentDate: Date): void {
        this.dateList = [];

        for (let i = -1; i <= 1; i++) {
            const date = new Date(new Date().setDate(currentDate.getDate() + i));

            this.dateList.push({
                date,
                timeList: this.timeIntervalList.map((item: string) => {
                    return {
                        value: false,
                        disabled: false,
                        label: item
                    };
                })
            });
        }
    }

}
