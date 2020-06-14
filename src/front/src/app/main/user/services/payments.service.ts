import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { Payment } from '../models/payment.model';

@Injectable({
    providedIn: 'root'
})
export class PaymentsService {

    constructor() { }

    getPayments(subscriptionId: number): Observable<Payment[]> {
        return of([
            {
                id: 0,
                paymentDate: new Date(new Date().setDate(1)),
                transactionDate: new Date(new Date().setDate(2)),
                price: {
                    total: 2000,
                    prime: 1200,
                    items: [
                        {
                            id: 0,
                            label: 'Куриные сердечки сушеные со вкусом борща',
                            value: 900
                        },
                        {
                            id: 1,
                            label: 'Миска с лого',
                            value: 300
                        }
                    ]
                },
                success: true,
            },
            {
                id: 1,
                paymentDate: new Date(new Date().setDate(1)),
                transactionDate: new Date(new Date().setDate(13)),
                price: {
                    total: 4000,
                    prime: 1200,
                    items: [
                        {
                            id: 0,
                            label: 'Куриные сердечки сушеные со вкусом борща',
                            value: 900
                        },
                        {
                            id: 1,
                            label: 'Миска с лого',
                            value: 300
                        }
                    ]
                },
                success: false,
            }
        ]);
    }
}
