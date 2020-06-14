import { Component, OnInit } from '@angular/core';
import { DictionariesService } from 'app/core/services/dictionaries.service';
import { SubscriptionService } from 'app/main/user/services/subscription.service';
import { ProductModel } from 'app/main/user/models';
import { MatDialog } from '@angular/material/dialog';
import {
    ProductCardDetailsDialogComponent
} from '../../dialogs/product-card-details/components/product-card-details-dialog/product-card-details-dialog.component';

@Component({
    selector: 'bar-merchandise',
    templateUrl: './merchandise.component.html',
    styleUrls: ['./merchandise.component.scss']
})
export class MerchandiseComponent implements OnInit {

    public merchandiseList: ProductModel[] = [];

    constructor(
        private dialog: MatDialog,
        private dictionaries: DictionariesService,
        private subscriptionService: SubscriptionService
    ) { }

    ngOnInit(): void {
        this.merchandiseList = this.dictionaries.merchandiseList;
    }

    public addToSubscription(product: ProductModel): void {
        this.subscriptionService.addProductToCard(product);
    }

    public openDetailsDialog(product: ProductModel): void {
        const dialogRef = this.dialog.open(ProductCardDetailsDialogComponent, {
            data: { product, items: this.merchandiseList },
            panelClass: 'product-details-dialog-container'
        });

        dialogRef.afterClosed().subscribe((item: ProductModel) => {
            this.subscriptionService.addProductToCard(item);
        });
    }
}
