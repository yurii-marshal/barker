import { Money } from './money.model';
import { Period } from './period.enum';
import { SubscriptionType } from './subscription-type.enum';
import { Address } from './address.model';


export interface SubscriptionTypeModel {
    id: SubscriptionType;
    name: string;
    phone?: string;
    email?: string;
    description?: string;
    receiptId?: number;
    price?: Money;
    priceCount?: string;
    period?: Period;
    address?: Address;
    active?: boolean;
    paid?: boolean;
    orderDeliveryDay?: any; // TODO: provide dictionary
    orderDeliveryTime?: any; // TODO: provide dictionary
    password?: string;
    imgSrc?: string;
    durationTimeTo?: string;
    durationWeekdayTo?: string;
    value?: boolean;
}
