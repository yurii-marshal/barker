import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

import { RegistrationSteps } from '../../models';
import { RegistrationStepsService } from '../../services';

@Component({
    selector: 'bar-fast-dev-navigation',
    templateUrl: './fast-dev-navigation.component.html'
})
export class FastDevNavigationComponent {
    public steps: typeof RegistrationSteps = RegistrationSteps;

    constructor(
        private bottomSheetRef: MatBottomSheetRef<FastDevNavigationComponent>,
        private stepsService: RegistrationStepsService
    ) {}

    public openLink($event: MouseEvent, step: RegistrationSteps): void {
        this.stepsService.setStep(step);
        this.bottomSheetRef.dismiss();
        $event.preventDefault();
    }

    public close(): void {
        this.bottomSheetRef.dismiss();
    }
}
