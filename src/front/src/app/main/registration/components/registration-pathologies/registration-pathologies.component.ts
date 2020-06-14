import { Component, OnInit } from '@angular/core';
import { Pet } from 'app/shared/models';
import { transitionEaseOut } from 'styles/animations';

import { BaseStep, PathologyModel, RegistrationSteps } from '../../models';
import { RegistrationStepsService, RegistrationStoreService } from '../../services';
import { DictionariesService } from 'app/core/services/dictionaries.service';

@Component({
    selector: 'bar-registration-pathologies',
    templateUrl: './registration-pathologies.component.html',
    styleUrls: ['./registration-pathologies.component.scss'],
    animations: [transitionEaseOut()]
})
export class RegistrationPathologiesComponent extends BaseStep<Pet> implements OnInit {
    public hasPathology = false;
    public pathologiesList: PathologyModel[] = [];

    public get valid() {
        return !this.hasPathology || this.pathologiesList.some(p => p.value);
    }

    private savedData: Pet;

    constructor(
        private dictionaries: DictionariesService,
        protected storeService: RegistrationStoreService,
        protected stepsService: RegistrationStepsService
    ) {
        super(RegistrationSteps.Pathologies, stepsService, storeService);
    }

    ngOnInit(): void {
        this.pathologiesList = this.dictionaries.pathologiesList;

        this.savedData = this.storeService.getStoreValue('pet');

        if (this.savedData.pathologies?.length) {
            this.initCurrentPathologies();
            this.hasPathology = true;
        }
    }

    private initCurrentPathologies() {
        this.pathologiesList.forEach((pathology: PathologyModel) => {
            pathology.value = (this.savedData.pathologies || []).includes(pathology.id);
        });
    }

    public nextStep(): void {
        let pathologies;

        if (this.hasPathology) {
            pathologies = this.pathologiesList.filter(pathology => pathology.value).map(pathology => pathology.id);
        } else {
            pathologies = null;
        }

        this.storeService.patchStoreValue('pet',
            {
                pathologies
            }
        );
        super.nextStep();
    }

}
