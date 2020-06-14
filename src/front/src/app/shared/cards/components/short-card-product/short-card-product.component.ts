import { Component, Input } from '@angular/core';
import { ProductModel } from 'app/main/user/models';

@Component({
    selector: 'bar-short-card-product',
    templateUrl: './short-card-product.component.html',
    styleUrls: ['./short-card-product.component.scss']
})
export class ShortCardProductComponent {
    @Input() isShort = true;

    @Input() item: ProductModel;

    constructor() { }

}
