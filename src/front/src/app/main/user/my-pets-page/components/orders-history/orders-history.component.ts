import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Order } from '../../../models/order.model';
import { OrdersService } from '../../../services/orders.service';
import { MatDialog } from '@angular/material/dialog';
import {
    OrdersHistoryDialogComponent
} from 'app/main/user/dialogs/orders-history-dialog/components/orders-history-dialog/orders-history-dialog.component';

@Component({
    selector: 'bar-orders-history',
    templateUrl: './orders-history.component.html',
    styleUrls: ['./orders-history.component.scss']
})
export class OrdersHistoryComponent implements OnInit {
    public orders$: Observable<Order[]>;

    constructor(
        private dialog: MatDialog,
        private ordersService: OrdersService
    ) { }

    ngOnInit(): void {
        this.orders$ = this.ordersService.getOrders();
    }

    public openOrdersHistoryDialog() {
        this.dialog.open(OrdersHistoryDialogComponent, {
            data: {
                petId: 1
            },
            panelClass: 'orders-history-dialog-container'
        });
    }

}
