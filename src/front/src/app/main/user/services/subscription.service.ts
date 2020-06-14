import { Injectable } from '@angular/core';
import { SubscriptionTypeModel } from 'app/shared/models/subscription-type.model';
import { User, ProductModel } from '../models';
import { Order } from '../models/order.model';
import { Observable } from 'rxjs/internal/Observable';
import { delay } from 'rxjs/internal/operators/delay';
import { of } from 'rxjs/internal/observable/of';
import { Feedback } from '../models/feedback.model';

@Injectable({
    providedIn: 'root'
})
export class SubscriptionService {

    public cardNumber = '****5602';

    public subscriptions: SubscriptionTypeModel[] = [
        {
            id: 1,
            name: 'CERN',
            active: false,
            paid: false
        },
        {
            id: 2,
            name: 'CSNS',
            active: true,
            paid: true
        },
    ];

    public orders: Order[] = [
        {
            id: '0',
            period: {
                start: new Date(),
                end: new Date()
            },
            items: [
                {
                    id: 0,
                    name: 'Куриные слайсы'
                },
                {
                    id: 1,
                    name: 'корм'
                },
                {
                    id: 2,
                    name: 'снеки'
                },
            ]
        },
        {
            id: '2',
            period: {
                start: new Date(),
                end: new Date()
            },
            items: [
                {
                    id: 3,
                    name: 'Куриные слайсы'
                },
                {
                    id: 7,
                    name: 'корм'
                },
                {
                    id: 454,
                    name: 'снеки'
                },
            ]
        },
        {
            id: '5',
            period: {
                start: new Date(),
                end: new Date()
            },
            items: [
                {
                    id: 54,
                    name: 'Куриные слайсы'
                },
                {
                    id: 546,
                    name: 'корм'
                },
                {
                    id: 2,
                    name: 'снеки'
                },
            ]
        }
    ];

    public userData: User = {
        id: 0,
        name: 'Саша',
        address: 'Пр. Голосеевский, 61, кв. 19',
        subscriptionDate: new Date(),
        deliveryDay: '10 марта',
        deliveryTime: '12:00 - 15:00'
    };

    public isActiveSubscription = true;
    public isSubscriptionPaid = false;

    constructor() { }

    public getSubscriptionsList(): SubscriptionTypeModel[] {
        return this.subscriptions.slice();
    }

    public getSubscriptionById(subscriptionId: number): SubscriptionTypeModel {
        return this.subscriptions.find((item: SubscriptionTypeModel) => item.id === subscriptionId);
    }

    public getSubscriptionDetails(subscriptionId: number): Observable<any> {
        return of(true).pipe(delay(500));
    }

    public getOrdersList(): Order[] {
        return this.orders.slice();
    }

    public getUserPersonalData(): User {
        return this.userData;
    }

    public sendFeedback(feedback: Feedback): Observable<any> {
        return of(true).pipe(delay(500));
    }

    public addProductToCard(product: ProductModel): void {
        // TODO
        // this.subscriptions[id].chosenProducts.push(productId);
    }

    public addMerchandiseToCard(product: ProductModel): void {
        // TODO
        // this.subscriptions[id].chosenMerchandise.push(productId);
    }

    public saveSubscription(subscriptionId: number): Observable<any> {
        // TODO POST
        return of(null).pipe(delay(500));
    }

    public pauseSubscription(subscriptionId: number): Observable<any> {
        // TODO POST
        return of(null).pipe(delay(500));
    }

    public renewSubscription(subscriptionId: number): Observable<any> {
        // TODO POST
        return of(null).pipe(delay(500));
    }

    public cancelSubscription(subscriptionId: number): Observable<any> {
        // TODO POST
        return of(null).pipe(delay(500));
    }
}
