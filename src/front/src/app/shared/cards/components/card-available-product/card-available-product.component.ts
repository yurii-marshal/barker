import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductModel } from 'app/main/user/models';

@Component({
    selector: 'bar-card-available-product',
    templateUrl: './card-available-product.component.html',
    styleUrls: ['./card-available-product.component.scss']
})
export class CardAvailableProductComponent {
    @Input() value: ProductModel;

    @Output() chooseItem: EventEmitter<ProductModel> = new EventEmitter();
    @Output() clickOutsideControl: EventEmitter<ProductModel> = new EventEmitter();

    constructor() { }

    public addToDelivery(product: ProductModel): void {
        this.chooseItem.next(product);
    }

    public clickOutside(product: ProductModel): void {
        this.clickOutsideControl.next(product);
    }

}
