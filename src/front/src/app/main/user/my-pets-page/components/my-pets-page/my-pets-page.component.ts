import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pet } from 'app/shared/models';

import { PetsService } from '../../../services/pets.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ChangeRecipeDialogComponent } from 'app/main/user/dialogs/change-recipe-dialog/components/change-recipe-dialog.component';
import {
    ChooseSubscriptionDialogComponent
} from 'app/main/user/dialogs/choose-subscription-dialog/components/choose-subscription-dialog.component';
import { RecipeModel } from 'app/main/registration/models';

@Component({
    selector: 'bar-my-pets-page',
    templateUrl: './my-pets-page.component.html',
    styleUrls: ['./my-pets-page.component.scss']
})
export class MyPetsPageComponent implements OnInit {

    public pets: Pet[] = [];
    public selectedPet: Pet;

    public recipe: RecipeModel = {
        id: 1,
        name: 'Курица',
        imgSrc: '../../../../../assets/images/dry-food-chicken.svg',
        price: 2000,
        portionCount: 5,
        portionWeight: 250,
        pauseTimeTo: '16:00',
        pauseWeekdayTo: 'четверга'
    };

    private changeRecipeDialog: MatDialogRef<ChangeRecipeDialogComponent>;

    constructor(
        private dialog: MatDialog,
        private router: Router,
        private petsService: PetsService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.petsService.getPets().subscribe(res => {
            this.pets = res;
            const snapshot = this.route.snapshot.params;

            this.selectedPet = this.pets.find(p => p.id === Number(snapshot.petId));
        });
    }

    public onSelectedChange(pet: Pet): void {
        this.router.navigate([`../${pet.id}`], { relativeTo: this.route });
    }

    public openRecipeDialog(petId: number): void {
        this.changeRecipeDialog = this.dialog.open(ChangeRecipeDialogComponent);

        this.changeRecipeDialog.afterClosed().subscribe((status?: number) => {
            if (status === 1) {
                this.openSubscriptionDialog(petId);
            }
        });
    }

    private openSubscriptionDialog(petId: number): void {
        // TODO: save petId & recipeId to SubscriptionService
        const chooseSubscriptionDialog = this.dialog.open(ChooseSubscriptionDialogComponent,
            {
                panelClass: 'subscriptions-dialog-container'
            });

        chooseSubscriptionDialog.afterClosed().subscribe((recipeId?: number) => {
            if (recipeId === 1) {
                this.router.navigate([`user/payment/${petId}/payment-details`]);
            } else if (recipeId === 0) {
                this.openRecipeDialog(petId);
            }
        });
    }

}
