import { Component, Input } from '@angular/core';

@Component({
    selector: 'bar-shopping-cart',
    templateUrl: './shopping-cart.component.html',
    styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {
    @Input() count: number;
    @Input() price: number;

    constructor() { }

}
