import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Pet } from 'app/shared/models';

import { BaseStep, RegistrationSteps } from '../../models';
import { RegistrationStepsService, RegistrationStoreService } from '../../services';
import { notFutureDate } from 'app/shared/inputs/components/date-selector/not-future-date.validator';

@Component({
    selector: 'bar-registration-birth-date',
    templateUrl: './registration-birth-date.component.html',
    styleUrls: ['./registration-birth-date.component.scss']
})
export class RegistrationBirthDateComponent extends BaseStep<Pet> {
    public readonly dogName: string;
    public form: FormGroup;
    public birthControl: FormControl;
    public savedData: Pet;

    constructor(
        protected storeService: RegistrationStoreService,
        protected stepsService: RegistrationStepsService
    ) {
        super(RegistrationSteps.DateOfBirth, stepsService, storeService);

        this.dogName = storeService.petName;
        const date = this.storeService.getStoreValue('pet')?.dateOfBirth || null;

        this.form = new FormGroup({
            dateOfBirth: new FormControl(date, [Validators.required, notFutureDate]),
            image: new FormControl()
        });
        this.savedData = this.storeService.getStoreValue('pet');
    }

    nextStep() {
        this.storeService.patchStoreValue('pet', this.form.value);
        super.nextStep();
    }


}
