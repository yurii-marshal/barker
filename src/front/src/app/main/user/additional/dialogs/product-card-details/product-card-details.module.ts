import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardDetailsDialogComponent } from './components/product-card-details-dialog/product-card-details-dialog.component';
import { NguCarouselModule } from '@ngu/carousel';
import { ButtonsModule } from 'app/shared/buttons/buttons.module';
import { MatIconModule } from '@angular/material/icon';
import { InputsModule } from 'app/shared/inputs/inputs.module';
import { CurrencyUAModule } from 'app/shared/pipes/currency-ua/currency-ua.module';



@NgModule({
    declarations: [ProductCardDetailsDialogComponent],
    imports: [
        CommonModule,
        NguCarouselModule,
        ButtonsModule,
        MatIconModule,
        InputsModule,
        CurrencyUAModule
    ],
    exports: [ProductCardDetailsDialogComponent]
})
export class ProductCardDetailsModule { }
