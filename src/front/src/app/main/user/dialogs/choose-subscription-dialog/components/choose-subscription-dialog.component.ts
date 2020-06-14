import { Component, OnInit, Inject } from '@angular/core';
import { enterLeave, transitionEaseOut } from 'styles/animations';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Pet } from 'app/shared/models';
import { PetsService } from 'app/main/user/services/pets.service';

@Component({
    selector: 'bar-choose-subscription-dialog',
    templateUrl: './choose-subscription-dialog.component.html',
    styleUrls: ['./choose-subscription-dialog.component.scss'],
    animations: [enterLeave, transitionEaseOut()]
})
export class ChooseSubscriptionDialogComponent implements OnInit {
    private petId = 1;

    private petProfile: Pet;

    public subscriptionForm: FormGroup;

    public isSubscriptionPaused: boolean;

    public subscription = {
        date: '19.02',
        time: '16:00'
    };

    constructor(
        private petsService: PetsService,
        public dialogRef: MatDialogRef<ChooseSubscriptionDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public subscriptionId: number
    ) { }

    ngOnInit(): void {
        this.petsService.getPetById(this.petId).subscribe((pet: Pet) => {
            this.petProfile = pet;
            this.subscriptionForm.patchValue({ recipeId: pet?.subscriptionId});
        });

        this.subscriptionForm = new FormGroup({
            subscriptionId: new FormControl(null, Validators.required)
        });
    }

    public chooseSubscription(): void {
        // TODO: save to SubscriptionService
        this.dialogRef.close(1);
    }

    public backToRecipesList(): void {
        this.dialogRef.close(0);
    }

    public closeDialog() {
        this.dialogRef.close(-1);
    }

}
