import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Pet } from 'app/shared/models';
import { PetsService } from 'app/main/user/services/pets.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { enterLeave, transitionEaseOut } from 'styles/animations';
import { SubscriptionService } from 'app/main/user/services/subscription.service';

@Component({
    selector: 'bar-change-recipe-dialog',
    templateUrl: './change-recipe-dialog.component.html',
    styleUrls: ['./change-recipe-dialog.component.scss'],
    animations: [enterLeave, transitionEaseOut()]
})
export class ChangeRecipeDialogComponent implements OnInit {
    private petId = 1;
    private petProfile: Pet;

    public recipesForm: FormGroup;

    public isSubscriptionPaused: boolean;

    constructor(
        private petsService: PetsService,
        private subscriptionService: SubscriptionService,
        public dialogRef: MatDialogRef<ChangeRecipeDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public recipeId: number
    ) { }

    ngOnInit(): void {
        this.petsService.getPetById(this.petId).subscribe((pet: Pet) => {
            this.petProfile = pet;
            this.recipesForm.patchValue({ recipeId: pet?.recipeId});
        });

        this.recipesForm = new FormGroup({
            recipeId: new FormControl(null, Validators.required)
        });

        // this.saveRecipe();
    }

    public renewSubscription(): void {
        this.subscriptionService.renewSubscription(this.petProfile.subscriptionId)
            .subscribe(() => {
                this.isSubscriptionPaused = false;
            });
    }

    public closeDialog(): void {
        this.dialogRef.close(0);
    }

    public saveRecipe(): void {
        // TODO: save recipeId from this.recipesForm.controls.recipeId.value
        this.dialogRef.close(1);
    }

}
