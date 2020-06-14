import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Pet } from 'app/shared/models';
import { PetSize } from 'app/shared/models/pet-size.enum';
import { transitionEaseOut } from 'styles/animations';

import { BaseStep, RegistrationSteps, Tonus } from '../../models';
import { RegistrationStepsService, RegistrationStoreService } from '../../services';

@Component({
    selector: 'bar-registration-weight',
    templateUrl: './registration-weight.component.html',
    styleUrls: ['./registration-weight.component.scss'],
    animations: [transitionEaseOut()]
})
export class RegistrationWeightComponent extends BaseStep<Pet> implements OnInit {

    public weightForm: FormGroup;

    public currentTonus: Tonus;

    public tonusList: Tonus[] = [
        {
            id: PetSize.small,
            name: 'Весит меньше, чем другие',
            imgSrc: './../../../assets/images/tonus-1.svg'
        },
        {
            id: PetSize.medium,
            name: 'Выглядит в самый раз',
            imgSrc: './../../../assets/images/tonus-2.svg'
        },
        {
            id: PetSize.fat,
            name: 'Скорее упитанный',
            imgSrc: './../../../assets/images/tonus-3.svg'
        }
    ];

    public styleWeightInputObj = {
        height: '48px',
        padding: '0 20px',
        fontSize: '16px',
        textAlign: 'center'
    };

    public isTonusBtnActive: boolean;
    public petName: string;
    private savedData: Pet;

    constructor(
        private fb: FormBuilder,
        protected storeService: RegistrationStoreService,
        protected stepsService: RegistrationStepsService
    ) {
        super(RegistrationSteps.MainInfo, stepsService, storeService);
    }

    ngOnInit(): void {
        this.savedData = this.storeService.getStoreValue('pet');
        this.petName = this.storeService.petName;

        if (this.savedData.petSize) {
            this.currentTonus = this.tonusList.find((tonus: Tonus) => tonus.id === this.savedData.petSize);
        }

        this.weightForm = this.fb.group({
            weight: this.fb.control(this.savedData?.weight || null, Validators.required),
            perfectWeight: this.fb.control(this.savedData?.perfectWeight || null, Validators.required)
        });

        if (this.savedData.petSize != null) {
            this.toggleTonusButton();
        }
    }

    public toggleTonusButton(): void {
        this.isTonusBtnActive = !this.isTonusBtnActive;
        this.isTonusBtnActive ? this.addPetSizeControl() : this.removePetSizeControl();
    }

    private addPetSizeControl(): void {
        this.weightForm.controls.perfectWeight.patchValue(null);
        this.weightForm.controls.perfectWeight.disable();
        this.weightForm.addControl('petSize', new FormControl(this.savedData?.petSize || 1, Validators.required));
    }

    private removePetSizeControl(): void {
        this.weightForm.controls.perfectWeight.enable();
        this.weightForm.removeControl('petSize');
    }

    public nextStep(): void {
        this.storeService.patchStoreValue('pet', this.weightForm.value);
        this.stepsService.nextStep();
    }

}
