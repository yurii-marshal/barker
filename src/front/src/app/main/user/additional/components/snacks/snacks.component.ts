import { Component, OnInit } from '@angular/core';
import { DictionariesService } from 'app/core/services/dictionaries.service';
import { ProductModel } from 'app/main/user/models';
import { SubscriptionService } from 'app/main/user/services/subscription.service';
import { MatDialog } from '@angular/material/dialog';
import {
    ProductCardDetailsDialogComponent
} from '../../dialogs/product-card-details/components/product-card-details-dialog/product-card-details-dialog.component';

@Component({
    selector: 'bar-snacks',
    templateUrl: './snacks.component.html',
    styleUrls: ['./snacks.component.scss']
})
export class SnacksComponent implements OnInit {

    public snacksList: ProductModel[] = [];

    constructor(
        private dialog: MatDialog,
        private dictionaries: DictionariesService,
        private subscriptionService: SubscriptionService
    ) { }

    ngOnInit(): void {
        this.snacksList = this.dictionaries.suggestionList;
    }

    public addToSubscription(product: ProductModel): void {
        this.subscriptionService.addProductToCard(product);
    }

    public openDetailsDialog(product: ProductModel): void {
        const dialogRef = this.dialog.open(ProductCardDetailsDialogComponent, {
            data: { product, items: this.snacksList },
            panelClass: 'product-details-dialog-container'
        });

        dialogRef.afterClosed().subscribe((item: ProductModel) => {
            this.subscriptionService.addProductToCard(item);
        });
    }
}
