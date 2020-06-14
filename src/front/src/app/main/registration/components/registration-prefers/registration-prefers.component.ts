import { Component, OnInit } from '@angular/core';
import { Pet } from 'app/shared/models';

import { BaseStep, PreferModel, RegistrationSteps } from '../../models';
import { RegistrationStepsService, RegistrationStoreService } from '../../services';
import { DictionariesService } from 'app/core/services/dictionaries.service';

@Component({
    selector: 'bar-registration-prefers',
    templateUrl: './registration-prefers.component.html',
    styleUrls: ['./registration-prefers.component.scss']
})
export class RegistrationPrefersComponent extends BaseStep<Pet> implements OnInit {
    public petName: string;
    public prefersList: PreferModel[] = [];

    private savedData: Pet;

    public get valid() {
        return this.prefersList.some(p => p.value);
    }

    constructor(
        private dictionaries: DictionariesService,
        protected storeService: RegistrationStoreService,
        protected stepsService: RegistrationStepsService
    ) {
        super(RegistrationSteps.Prefers, stepsService, storeService);
    }

    ngOnInit(): void {
        this.prefersList = this.dictionaries.prefersList;
        this.petName = this.storeService.petName;
        this.savedData = this.storeService.getStoreValue('pet');

        this.prefersList.forEach((prefer: PreferModel) => {
            prefer.value = (this.savedData.petFood || []).includes(prefer.id);
        });
    }

    public nextStep(): void {
        this.storeService.patchStoreValue('pet', {
            petFood: this.prefersList.filter(p => p.value).map(p => p.id)
        });
        this.stepsService.nextStep();
    }

}
