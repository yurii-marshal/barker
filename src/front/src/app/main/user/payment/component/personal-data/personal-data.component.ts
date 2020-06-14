import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'app/main/user/models';
import { SubscriptionService } from 'app/main/user/services/subscription.service';
import { DictionariesService } from 'app/core/services/dictionaries.service';
import { Option } from 'app/shared/inputs/models/option.model';

@Component({
    selector: 'bar-personal-data',
    templateUrl: './personal-data.component.html',
    styleUrls: ['./personal-data.component.scss']
})
export class PersonalDataComponent implements OnInit {

    public personalDataForm: FormGroup;

    public citiesList: Option[] = [];
    public daysList: Option[] = [];
    public timeList: Option[] = [];

    public savedData: User;

    constructor(
        private fb: FormBuilder,
        private dictionaries: DictionariesService,
        private subscriptionService: SubscriptionService,
    ) { }

    ngOnInit(): void {
        this.savedData = this.subscriptionService.getUserPersonalData();

        this.citiesList = this.dictionaries.citiesList;
        this.daysList = this.dictionaries.daysList;
        this.timeList = this.dictionaries.timeList;

        this.personalDataForm = this.fb.group({
            name: this.fb.control(this.savedData?.name, Validators.required),
            phone: this.fb.control(this.savedData?.phone, Validators.required),
            email: this.fb.control(this.savedData?.email, Validators.email),

            city: this.fb.control(this.savedData?.city, Validators.required),
            address: this.fb.control(this.savedData?.address, Validators.required),
            details: this.fb.control(this.savedData?.details),
            deliveryDay: this.fb.control(this.savedData?.deliveryDay, Validators.required),
            deliveryTime: this.fb.control(this.savedData?.deliveryTime, Validators.required)
        });

        this.personalDataForm.valueChanges.subscribe((value: string) => {
            console.log('Save: ', value);
        });
    }

}
