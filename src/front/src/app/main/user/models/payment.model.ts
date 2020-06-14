export interface Payment {
    id: number;
    paymentDate: Date;
    transactionDate: Date;
    price: {
        total: number;
        prime: number;
        items: any[];
    };
    success: boolean;
}
