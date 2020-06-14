export interface DeliveryModel {
    id?: number;
    address?: string;
    date?: Date;
    timeFrom?: string;
    timeTo?: string;
    disposalDate?: Date;
    disposalTimeFrom?: string;
    disposalTimeTo?: string;
    totalAmount?: number;
    mainRationPrice?: number;
    additionalRationPrice?: number;
    productsAddedTimeFrom?: string;
    productsAddedWeekdayFrom?: string;
    paymentCard?: string;
}
