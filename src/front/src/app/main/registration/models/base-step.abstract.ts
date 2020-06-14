import { RegistrationStepsService, RegistrationStoreService } from '../services';
import { RegistrationSteps } from './registration-steps.enum';

export abstract class BaseStep<TModel> {
    constructor(
        protected step: RegistrationSteps,
        protected stepsService: RegistrationStepsService,
        protected storeService: RegistrationStoreService
    ) { }

    public nextStep(): void {
        this.stepsService.nextStep();
    }

    public prevStep(): void {
        this.stepsService.prevStep();
    }
}
