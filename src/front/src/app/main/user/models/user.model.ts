export interface User {
    id: number;
    name: string;
    phone?: number;
    email?: string;
    city?: string;
    address?: string;
    details?: string;
    subscriptionDate?: Date;
    deliveryDay?: string;
    deliveryTime?: string;
}
