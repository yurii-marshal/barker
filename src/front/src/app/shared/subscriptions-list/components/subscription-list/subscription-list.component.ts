import { Component, OnInit, Output, EventEmitter, ViewChild, forwardRef } from '@angular/core';
import { FormGroup, NG_VALUE_ACCESSOR, Validators, FormControl, ControlValueAccessor } from '@angular/forms';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';
import { DictionariesService } from 'app/core/services/dictionaries.service';
import { SubscriptionTypeModel } from 'app/shared/models/subscription-type.model';

@Component({
    selector: 'bar-subscription-list',
    templateUrl: './subscription-list.component.html',
    styleUrls: ['./subscription-list.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SubscriptionListComponent),
            multi: true
        }
    ]
})
export class SubscriptionListComponent implements ControlValueAccessor, OnInit {
    @Output() chooseSubscription: EventEmitter<number> = new EventEmitter();

    @ViewChild('subscribeSlider') subscribeSlider: NguCarousel<any>;

    public subscriptionFormGroup: FormGroup = new FormGroup({
        subscriptionId: new FormControl(null, Validators.required)
    });

    public subscribesList: SubscriptionTypeModel[] = [];

    public carouselConfig: NguCarouselConfig = {
        grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
        load: this.subscribesList.length,
        loop: false,
        touch: true,
        velocity: 0.2
    };

    constructor(
        private dictionaries: DictionariesService
    ) { }

    onChange = (value: number) => { };

    onTouch = (value: number) => { };

    writeValue(subscriptionId: number): void {
        if (subscriptionId) {
            this.subscriptionFormGroup.setValue({ subscriptionId });
        }

        this.onChange(subscriptionId);
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouch = fn;
    }

    ngOnInit(): void {
        this.subscribesList = this.dictionaries.subscribesList;
    }

    public chooseOption(id: number): void {
        this.chooseSubscription.next(id);
    }

}
