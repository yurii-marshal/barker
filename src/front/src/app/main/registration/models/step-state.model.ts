import { RegistrationSteps } from './registration-steps.enum';

export interface StepState {
    step: RegistrationSteps;
    name: string;
    progress?: number;
}
