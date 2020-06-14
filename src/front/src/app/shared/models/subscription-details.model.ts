import { ProductModel, DeliveryModel } from 'app/main/user/models';

export interface SubscriptionDetails {
    delivery: DeliveryModel;
    productsList: ProductModel[];
    paused: boolean;
}
