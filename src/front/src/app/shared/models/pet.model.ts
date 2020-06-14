import { Activity, Pathology, PetFood } from '../models';
import { Gender } from './gender.enum';
import { PetSize } from './pet-size.enum';

export interface Pet {
    id?: number;
    name?: string;
    age?: number;

    // From fornt
    gender?: Gender;
    petSize?: PetSize; // optional
    // From front end

    breedId?: number;
    dateOfBirth?: string;
    image?: string;
    weight?: number;
    perfectWeight?: number;
    activity?: Activity;
    pathologies?: Pathology[];
    recipeId?: number;
    subscriptionId?: number;
    petFood?: PetFood[];
    dietId?: number;
    ownerId?: number;
}
