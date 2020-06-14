import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { RegistrationSteps, StepState } from '../models';
import { RegistrationStoreService } from './registration-store.service';

@Injectable()
export class RegistrationStepsService {
    private activeStep$: BehaviorSubject<StepState>;
    private STEPS: StepState[];

    public get activeStep(): BehaviorSubject<StepState> {
        return this.activeStep$;
    }

    constructor(private storeService: RegistrationStoreService) { }

    public init(): void {
        const storedStep = this.storeService.getActiveStep();
        this.STEPS = this.initSteps();

        this.activeStep$ = new BehaviorSubject(this.STEPS[storedStep]);
    }

    public nextStep() {
        const current = this.activeStep$.value;

        if (current.step === this.STEPS.length - 1) {
            throw new Error('Last step!');
        }

        const nextStep = current.step + 1;

        this.activeStep$.next(this.STEPS[nextStep]);
        this.storeService.setActiveStep(nextStep);
    }

    public prevStep() {
        const current = this.activeStep$.value;

        if (current.step === 0) {
            throw new Error('First step!');
        }

        const prevStep = current.step - 1;

        this.activeStep$.next(this.STEPS[prevStep]);
        this.storeService.setActiveStep(prevStep);
    }

    public setStep(step: RegistrationSteps) {
        this.activeStep$.next(this.STEPS[step]);
        this.storeService.setActiveStep(step);
    }

    private initSteps(): StepState[] {
        const keys = Object.values(RegistrationSteps);
        const onlyNumbers = keys.filter(x => !isNaN(Number(x)));

        return Array(onlyNumbers.length)
            .fill(null)
            .map((x, index) => {
                return {
                    step: index as RegistrationSteps,
                    name: RegistrationSteps[index],
                    progress: this.calculatePercent(index as RegistrationSteps),
                    data: null
                };
            });
    }

    private calculatePercent(step: RegistrationSteps): number {
        const maxStep = 6;
        if (step > maxStep) {
            return null;
        }

        return Math.floor((100 / maxStep) * step);
    }
}
