import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BaseStep, RegistrationSteps } from '../../models';
import { RegistrationStepsService, RegistrationStoreService } from '../../services';
import { Pet } from 'app/shared/models';
import { MatDialog } from '@angular/material/dialog';
import { FaqDialogComponent } from '../../dialogs/faq-dialog/components/faq-dialog/faq-dialog.component';

@Component({
    selector: 'bar-registration-recipe',
    templateUrl: './registration-recipe.component.html',
    styleUrls: ['./registration-recipe.component.scss']
})
export class RegistrationRecipeComponent extends BaseStep<null> implements OnInit {
    public recipeForm: FormGroup;

    private savedData: Pet;

    constructor(
        private fb: FormBuilder,
        private dialog: MatDialog,
        protected storeService: RegistrationStoreService,
        protected stepsService: RegistrationStepsService
    ) {
        super(RegistrationSteps.Recipe, stepsService, storeService);
    }

    ngOnInit(): void {
        this.savedData = this.storeService.getStoreValue('pet');

        this.recipeForm = this.fb.group({
            recipeId: this.fb.control(this.savedData?.recipeId || null, Validators.required)
        });
    }

    public openFaqDialog(): void {
        this.dialog.open(FaqDialogComponent, {
            panelClass: 'faq-dialog-container'
        });
    }

    public nextStep(form?: FormGroup): void {
        this.storeService.patchStoreValue('pet',
            {
                recipeId: form.controls.recipeId.value
            }
        );
        this.stepsService.nextStep();
    }

}
