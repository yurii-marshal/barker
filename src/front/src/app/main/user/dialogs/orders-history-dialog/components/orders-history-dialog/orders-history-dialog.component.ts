import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { transitionEaseOut } from 'styles/animations';
import { Pet } from 'app/shared/models';
import { PetsService } from 'app/main/user/services/pets.service';
import { Observable } from 'rxjs/internal/Observable';
import { Order } from 'app/main/user/models/order.model';
import { OrdersService } from 'app/main/user/services/orders.service';

@Component({
    selector: 'bar-orders-history-dialog',
    templateUrl: './orders-history-dialog.component.html',
    styleUrls: ['./orders-history-dialog.component.scss'],
    animations: [transitionEaseOut()]
})
export class OrdersHistoryDialogComponent implements OnInit {
    public pets: Pet[] = [];
    public selectedPet: Pet;

    public orders$: Observable<Order[]>;

    constructor(
        private petsService: PetsService,
        private ordersService: OrdersService,
        public dialogRef: MatDialogRef<OrdersHistoryDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

    ngOnInit(): void {
        this.petsService.getPets().subscribe(res => {
            this.pets = res;
            this.selectedPet = this.pets.find(p => p.id === Number(this.data.petId));
        });

        this.orders$ = this.ordersService.getOrders();
    }

    public onSelectedChange(pet: Pet): void {
        this.orders$ = this.ordersService.getOrders();
    }

    public close(): void {
        this.dialogRef.close();
    }

}
