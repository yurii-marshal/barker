import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Pet } from 'app/shared/models';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ChangeRecipeDialogComponent } from '../dialogs/change-recipe-dialog/components/change-recipe-dialog.component';
import { PetsService } from '../services/pets.service';
import { ChooseSubscriptionDialogComponent } from '../dialogs/choose-subscription-dialog/components/choose-subscription-dialog.component';
import { Router } from '@angular/router';
import { FeedbackDialogComponent } from '../dialogs/feedback-dialog/components/feedback-dialog/feedback-dialog.component';
import {
    OrdersHistoryDialogComponent
} from '../dialogs/orders-history-dialog/components/orders-history-dialog/orders-history-dialog.component';

@Component({
    selector: 'bar-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
    public petsList: Pet[] = [];

    public currentPet: Pet;

    @ViewChild('petsSlider') petsSlider: NguCarousel<any>;

    public carouselConfig: NguCarouselConfig = {
        grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
        load: this.petsList.length,
        loop: false,
        touch: true,
        velocity: 0.2,
        point: {
            visible: true,
            hideOnSingleSlide: true
        }
    };

    private changeRecipeDialog: MatDialogRef<ChangeRecipeDialogComponent>;

    constructor(
        private dialog: MatDialog,
        private router: Router,
        private petsService: PetsService
    ) { }

    ngOnInit(): void {
        this.petsService.getPets().subscribe((pets: Pet[]) => {
            this.petsList = pets;
            this.currentPet = pets[0];
        });
    }

    ngOnDestroy(): void {
        if (this.changeRecipeDialog) {
            this.changeRecipeDialog.close();
        }
    }

    public moveToHistory(id: number): void {
        // this.router.navigate([`user/my-pets/${id}/orders-history`]);
        this.dialog.open(OrdersHistoryDialogComponent, {
            data: {
                petId: id
            },
            panelClass: 'orders-history-dialog-container'
        });
    }

    public moveToPetProfile(id: number): void {
        this.router.navigate([`user/my-pets/${id}/pet-profile`]);
    }

    public openRecipeDialog(petId: number): void {
        this.changeRecipeDialog = this.dialog.open(ChangeRecipeDialogComponent);

        this.changeRecipeDialog.afterClosed().subscribe((status?: number) => {
            if (status === 1) {
                this.openSubscriptionDialog(petId);
            }
        });
    }

    public openFeedbackDialog(): void {
        this.dialog.open(FeedbackDialogComponent, {
            panelClass: 'feedback-dialog-container'
        });
    }

    public updatePetData(ev: any): void {
        this.currentPet = this.petsList[ev.currentSlide];
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
