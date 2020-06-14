import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pet } from 'app/shared/models';

import { ActivityModel, BaseStep, RegistrationSteps } from '../../models';
import { RegistrationStepsService, RegistrationStoreService } from '../../services';
import { DictionariesService } from 'app/core/services/dictionaries.service';

@Component({
    selector: 'bar-registration-activity',
    templateUrl: './registration-activity.component.html',
    styleUrls: ['./registration-activity.component.scss']
})
export class RegistrationActivityComponent extends BaseStep<Pet> implements OnInit {

    public activityForm: FormGroup;
    public petData: Pet;
    public currentActivity: ActivityModel;
    public activityList: ActivityModel[] = [];

    constructor(
        private fb: FormBuilder,
        private dictionaries: DictionariesService,
        protected storeService: RegistrationStoreService,
        protected stepsService: RegistrationStepsService
    ) {
        super(RegistrationSteps.Activity, stepsService, storeService);
    }

    ngOnInit(): void {
        this.activityList = this.dictionaries.activityList;

        this.petData = this.storeService.getStoreValue('pet');

        if (this.petData.activity != null) {
            this.currentActivity = this.activityList.find((activity: ActivityModel) => activity.id === this.petData.activity);
        } else {
            this.currentActivity = this.activityList[1];
        }

        this.activityForm = this.fb.group({
            activity: this.fb.control(this.petData?.activity || 1, Validators.required)
        });
    }

    public nextStep(): void {
        this.storeService.patchStoreValue('pet', this.activityForm.value);
        this.stepsService.nextStep();
    }

}
