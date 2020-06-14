import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Option } from 'app/shared/inputs/models/option.model';
import { Pet } from 'app/shared/models';

import { BaseStep, RegistrationSteps } from '../../models';
import { RegistrationStepsService, RegistrationStoreService } from '../../services';
import { DictionariesService } from 'app/core/services/dictionaries.service';

@Component({
    selector: 'bar-registration-main-info',
    templateUrl: './registration-main-info.component.html',
    styleUrls: ['./registration-main-info.component.scss']
})
export class RegistrationMainInfoComponent extends BaseStep<Pet> implements OnInit {
    public mainForm: FormGroup;
    public breedList: Option[] = [];
    public currentBreed: Option;
    private savedData: Pet;

    constructor(
        private fb: FormBuilder,
        private dictionaries: DictionariesService,
        protected storeService: RegistrationStoreService,
        protected stepsService: RegistrationStepsService
    ) {
        super(RegistrationSteps.MainInfo, stepsService, storeService);
    }

    ngOnInit(): void {
        this.breedList = this.dictionaries.breedList.map(breed => ({ value: breed.id, label: breed.name }));

        this.savedData = this.storeService.getStoreValue('pet');

        if (this.savedData) {
            this.currentBreed = this.breedList.find((breed: Option) => breed.value === this.savedData.breedId);
        }

        this.mainForm = this.fb.group({
            name: this.fb.control(
                this.savedData?.name || '',
                [
                    Validators.required,
                    Validators.pattern(/^(\S\D{0,14}\S)$/)
                ]
            ),
            gender: this.fb.control(this.savedData?.gender || '0', Validators.required),
            breedId: this.fb.control(this.currentBreed || null, Validators.required),
        });

        this.mainForm.controls.breedId.valueChanges.subscribe(value => {
            this.currentBreed = value;
        });
    }

    public nextStep(): void {
        const formValue = this.mainForm.value;
        formValue.breedId = this.currentBreed.value;

        this.storeService.patchStoreValue('pet', formValue);
        this.stepsService.nextStep();
    }
}
