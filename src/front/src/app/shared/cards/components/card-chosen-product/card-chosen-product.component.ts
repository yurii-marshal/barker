import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductModel } from 'app/main/user/models';
import { transitionEaseOut } from 'styles/animations';

@Component({
    selector: 'bar-card-chosen-product',
    templateUrl: './card-chosen-product.component.html',
    styleUrls: ['./card-chosen-product.component.scss'],
    animations: [transitionEaseOut()]
})
export class CardChosenProductComponent implements OnInit {
    @Input() value: ProductModel;

    @Output() removeItem: EventEmitter<number> = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
    }

    public deleteChosenProduct(id: number): any {
        this.removeItem.next(id);
    }

}
