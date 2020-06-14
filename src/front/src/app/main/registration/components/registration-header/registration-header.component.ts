import { Component, Input } from '@angular/core';
import { enterLeave, transitionEaseOut } from 'styles/animations';

import { RegistrationSteps, StepState } from '../../models';
import { RegistrationStepsService } from '../../services';

@Component({
    selector: 'bar-registration-header',
    templateUrl: './registration-header.component.html',
    styleUrls: ['./registration-header.component.scss'],
    animations: [enterLeave, transitionEaseOut()]
})
export class RegistrationHeaderComponent {
    @Input()
    public state: StepState;

    public steps: typeof RegistrationSteps = RegistrationSteps;

    constructor(private stepsSerice: RegistrationStepsService) {}

    public back(): void {
        this.stepsSerice.prevStep();
    }
}
