import { Component, OnInit } from '@angular/core';

import { BaseStep, RegistrationSteps } from '../../models';
import { RegistrationStepsService, RegistrationStoreService } from '../../services';
import { SubscriptionTypeModel } from 'app/shared/models/subscription-type.model';

@Component({
    selector: 'bar-registration-subscribe',
    templateUrl: './registration-subscribe.component.html',
    styleUrls: ['./registration-subscribe.component.scss']
})
export class RegistrationSubscribeComponent extends BaseStep<null> implements OnInit {
    public subscribeId: number;

    // TODO: bing date of the subscription
    public payment = {
        date: '',
        hours: ''
    };

    private savedData: SubscriptionTypeModel;

    constructor(
        protected storeService: RegistrationStoreService,
        protected stepsService: RegistrationStepsService
    ) {
        super(RegistrationSteps.SubVariant, stepsService, storeService);
    }

    ngOnInit(): void {
        this.savedData = this.storeService.getStoreValue('subscription') as SubscriptionTypeModel;
    }

    // TODO: this.router.navigate(['second-pet-recipe']);
    public chooseSecondPetRecipe(): void { }

    public nextStep(): void {
        this.storeService.patchStoreValue('subscription', { subscribeId: this.subscribeId });
        this.stepsService.nextStep();
    }

}
