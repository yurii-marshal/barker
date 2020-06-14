import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { SubscriptionService } from 'app/main/user/services/subscription.service';
import { SubscriptionTypeModel } from 'app/shared/models/subscription-type.model';
import { Pet } from 'app/shared/models';

@Component({
    selector: 'bar-paused-subscription-tile',
    templateUrl: './paused-subscription-tile.component.html',
    styleUrls: ['./paused-subscription-tile.component.scss']
})
export class PausedSubscriptionTileComponent implements OnInit {

    @Input() pet: Pet;

    @Output() subStatusChanged: EventEmitter<boolean> = new EventEmitter();

    public subscription: SubscriptionTypeModel;

    public delivery = {
        paymentCard: '****5618'
    };

    constructor(
        private subscriptionService: SubscriptionService
    ) { }

    ngOnInit(): void {
        this.subscription = this.subscriptionService.getSubscriptionById(this.pet.subscriptionId);
    }

    public renewSubscription(): void {
        this.subscriptionService.renewSubscription(this.pet.subscriptionId)
            .subscribe(() => {
                this.subStatusChanged.emit(true);
            });
    }

}
