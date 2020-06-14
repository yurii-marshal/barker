import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { CurrencyUAModule } from '../pipes/currency-ua/currency-ua.module';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';



@NgModule({
    declarations: [ShoppingCartComponent],
    imports: [
        CommonModule,
        MatIconModule,
        CurrencyUAModule
    ],
    exports: [ShoppingCartComponent]
})
export class ShoppingCartModule { }
