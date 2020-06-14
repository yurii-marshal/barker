import { ProductModel } from './product.model';

export interface Order {
    id: string;
    period: {
        start: Date,
        end: Date
    };
    items: ProductModel[];
    isLiked?: boolean;
    comment?: string;
}
