import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Order } from '../models/order.model';

@Injectable()
export class OrdersService {

    constructor() { }

    getOrders(): Observable<Order[]> {
        return of([
            {
                id: '0',
                period: {
                    start: new Date(new Date().setDate(1)),
                    end: new Date(new Date().setDate(12))
                },
                items: [],
                isLiked: null,
                comment: ''
            },
            {
                id: '1',
                period: {
                    start: new Date(new Date().setDate(13)),
                    end: new Date(new Date().setDate(24))
                },
                items: [
                    {
                        id: 0,
                        imgSrc: 'assets/images/beef.svg',
                        name: 'Говядина',
                        count: '5 порций',
                        price: 1400
                    },
                    {
                        id: 1,
                        imgSrc: 'assets/images/merch.svg',
                        name: 'Снэки/Мерч',
                        count: '5 товаров',
                        price: 600
                    },
                    {
                        id: 2,
                        imgSrc: 'assets/images/merch.svg',
                        name: 'Снэки/Мерч',
                        count: '10 товаров',
                        price: 1200
                    }
                ],
                isLiked: false,
                comment: `Было меньше овощей чем обычно. Мой пёс не ел без овощей.
                Можно ли добавить двойную порцию моркови к следующему заказу`
            }
        ]);
    }
}
