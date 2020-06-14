import { Pet } from 'app/shared/models';

import { RegistrationSteps } from './registration-steps.enum';
import { SubscriptionTypeModel } from 'app/shared/models/subscription-type.model';

export interface RegistrationStore {
    /**
     * Unix Timestamp
     */
    expires: number;
    activeStep: RegistrationSteps;
    pet: Pet;
    subscription: SubscriptionTypeModel;
}
