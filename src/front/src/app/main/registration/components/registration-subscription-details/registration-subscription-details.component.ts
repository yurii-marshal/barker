import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BaseStep, RegistrationSteps } from '../../models';
import { RegistrationStepsService, RegistrationStoreService } from '../../services';
import { SubscriptionTypeModel } from 'app/shared/models/subscription-type.model';
import { Option } from 'app/shared/inputs/models/option.model';
import { DictionariesService } from 'app/core/services/dictionaries.service';

@Component({
    selector: 'bar-registration-subscription-details',
    templateUrl: './registration-subscription-details.component.html',
    styleUrls: ['./registration-subscription-details.component.scss']
})
export class RegistrationSubscriptionDetailsComponent extends BaseStep<null> implements OnInit {

    public subscriptionDetailsForm: FormGroup;

    public citiesList: Option[] = [];
    public daysList: Option[] = [];
    public timeList: Option[] = [];

    private savedData: SubscriptionTypeModel;

    constructor(
        private fb: FormBuilder,
        private dictionaries: DictionariesService,
        protected storeService: RegistrationStoreService,
        protected stepsService: RegistrationStepsService
    ) {
        super(RegistrationSteps.Subscribe, stepsService, storeService);
    }

    ngOnInit(): void {
        this.citiesList = this.dictionaries.citiesList;
        this.daysList = this.dictionaries.daysList;
        this.timeList = this.dictionaries.timeList;
        this.savedData = this.storeService.getStoreValue('subscription') as SubscriptionTypeModel;

        this.subscriptionDetailsForm = this.fb.group({
            name: this.fb.control(this.savedData?.name || '', Validators.required),
            phone: this.fb.control(this.savedData?.phone || '', Validators.required),
            email: this.fb.control(this.savedData?.email || '', Validators.required),
            city: this.fb.control(this.savedData?.address?.city || '', Validators.required),
            street: this.fb.control(this.savedData?.address?.street || '', Validators.required),
            addressDetails: this.fb.control(this.savedData?.address?.addressDetails || '', Validators.required),
            orderDeliveryDay: this.fb.control(this.savedData?.orderDeliveryDay?.label || '', Validators.required),
            orderDeliveryTime: this.fb.control(this.savedData?.orderDeliveryTime?.label || '', Validators.required)
        });
    }

    public nextStep(): void {
        let subFormValue = this.subscriptionDetailsForm.value;
        subFormValue = Object.assign({}, subFormValue, {
            address: {
                city: subFormValue.city,
                street: subFormValue.street,
                addressDetails: subFormValue.addressDetails
            }
        });
        delete subFormValue.city;
        delete subFormValue.street;
        delete subFormValue.addressDetails;
        this.storeService.patchStoreValue('subscription', subFormValue);
        this.stepsService.nextStep();
    }

}
