import { QuantityType } from './quantity-type.enum';

export interface OrderItem {
    id: string;
    image?: string;
    name: string;
    price?: number;
    quantity?: number;
    quantityType?: QuantityType;
}
