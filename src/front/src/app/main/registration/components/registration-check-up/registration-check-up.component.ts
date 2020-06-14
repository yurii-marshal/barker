import { Component, OnInit } from '@angular/core';
import { Pathology, Pet, PetFood } from 'app/shared/models';

import { BaseStep, RegistrationSteps } from '../../models';
import { RegistrationStepsService, RegistrationStoreService } from '../../services';
import { MatDialog } from '@angular/material/dialog';
import { CheckUpEditDialogComponent } from '../../dialogs/check-up-edit/components/check-up-edit-dialog/check-up-edit-dialog.component';
import { DictionariesService } from 'app/core/services/dictionaries.service';

@Component({
    selector: 'bar-registration-check-up',
    templateUrl: './registration-check-up.component.html',
    styleUrls: ['./registration-check-up.component.scss']
})
export class RegistrationCheckUpComponent extends BaseStep<Pet> implements OnInit {
    public steps: typeof RegistrationSteps = RegistrationSteps;

    public petName: string;
    public breedName: string;
    public birthDate: string;
    public activityName: string;
    public pathologies: string;
    public prefers: string;

    public savedData: Pet;

    constructor(
        private dialog: MatDialog,
        protected storeService: RegistrationStoreService,
        protected stepsService: RegistrationStepsService,
        private dictionaries: DictionariesService
    ) {
        super(RegistrationSteps.CheckUp, stepsService, storeService);
    }

    ngOnInit(): void {
        this.petName = this.storeService.petName;
        this.savedData = this.storeService.getStoreValue('pet');

        this.breedName = this.dictionaries.getBreedById(this.savedData?.breedId)?.name;

        this.activityName = this.dictionaries.getActivityById(this.savedData?.activity)?.name;

        this.pathologies = (this.savedData?.pathologies || [])
            .map((id: Pathology) => this.dictionaries.getPathologyById(id).name)
            .join(', ');

        this.prefers = (this.savedData?.petFood || [])
            .map((id: PetFood) => this.dictionaries.getPreferById(id).name)
            .join(', ');
    }

    public openStepDialog(registrationStep: RegistrationSteps): void {
        // const dialogRef = this.dialog.open(CheckUpEditDialogComponent, {
        //     data: registrationStep,
        //     panelClass: 'check-up-dialog-container'
        // });

        // dialogRef.afterClosed().subscribe((data: boolean) => {
        //     if (data) {
        //         this.savedData = this.storeService.getStoreValue('pet');
        //     }
        // });
    }

    public nextStep(): void {
        this.stepsService.nextStep();
    }

}
