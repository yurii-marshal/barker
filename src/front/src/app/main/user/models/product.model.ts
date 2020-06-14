export interface ProductModel {
    id: number;
    name: string;
    description?: string;
    details?: string[];
    price?: number;
    imgSrc?: string;
    count?: number | string;
}
