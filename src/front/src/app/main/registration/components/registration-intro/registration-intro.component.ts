import { Component } from '@angular/core';

import { RegistrationSteps } from '../../models';
import { BaseStep } from '../../models/base-step.abstract';
import { RegistrationStepsService } from '../../services';
import { RegistrationStoreService } from '../../services/registration-store.service';

@Component({
    selector: 'bar-registration-intro',
    templateUrl: './registration-intro.component.html',
    styleUrls: ['./registration-intro.component.scss']
})
export class RegistrationIntroComponent extends BaseStep<null> {
    constructor(
        protected stepsService: RegistrationStepsService,
        protected storeService: RegistrationStoreService
    ) {
        super(RegistrationSteps.Intro, stepsService, storeService);
    }
}
