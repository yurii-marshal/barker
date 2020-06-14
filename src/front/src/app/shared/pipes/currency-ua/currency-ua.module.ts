import { CommonModule, DecimalPipe } from '@angular/common';
import { NgModule } from '@angular/core';

import { CurrencyUAPipe } from './currency-ua.pipe';



@NgModule({
    declarations: [CurrencyUAPipe],
    imports: [
        CommonModule
    ],
    providers: [DecimalPipe],
    exports: [CurrencyUAPipe]
})
export class CurrencyUAModule { }
