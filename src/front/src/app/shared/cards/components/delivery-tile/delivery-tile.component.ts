import { Component, Input } from '@angular/core';
import { SubscriptionService } from 'app/main/user/services/subscription.service';
import { Pet, SubscriptionDetails } from 'app/shared/models';
import { PetsService } from 'app/main/user/services/pets.service';
import { DictionariesService } from 'app/core/services/dictionaries.service';

@Component({
    selector: 'bar-delivery-tile',
    templateUrl: './delivery-tile.component.html',
    styleUrls: ['./delivery-tile.component.scss']
})
export class DeliveryTileComponent {

    @Input()
    set pet(pet: Pet) {
        if (pet?.subscriptionId) {
            this.getSubscriptionDetails();
        }
    }

    public subscription: SubscriptionDetails = {
        delivery: {
            totalAmount: 2000,
            timeFrom: '7:00',
            timeTo: '9:00',
            date: new Date(),
            disposalDate: new Date(),
            disposalTimeFrom: '16:00'
        },
        productsList: [
            {
                id: 0,
                imgSrc: 'assets/images/beef.svg',
                name: 'Говядина',
                count: '5 порций',
                price: 1400
            },
            {
                id: 1,
                imgSrc: 'assets/images/merch.svg',
                name: 'Снэки/Мерч',
                count: '5 товаров',
                price: 600
            },
            {
                id: 2,
                imgSrc: 'assets/images/merch.svg',
                name: 'Снэки/Мерч',
                count: '10 товаров',
                price: 1200
            }
        ],
        paused: false
    };

    constructor(
        private petsService: PetsService,
        private subscriptionService: SubscriptionService,
        public dictionariesService: DictionariesService
    ) { }

    public getSubscriptionDetails() {
        this.subscriptionService.getSubscriptionDetails(this.pet?.subscriptionId)
            .subscribe((data: SubscriptionDetails) => {
                // this.subscription = data;
            });
    }

    public renewSubscription(): void {
        this.subscriptionService.renewSubscription(this.pet?.subscriptionId)
            .subscribe(() => {
                this.subscription.paused = false;
            });
    }

    public deleteAccount(): void {
        this.petsService.removePetAccount(this.pet?.id)
            .subscribe(() => {
            });
    }
}
