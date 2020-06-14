import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { PersonalDataComponent } from './component/personal-data/personal-data.component';
import { PaymentDetailsComponent } from './component/payment-details/payment-details.component';
import { PaymentPageComponent } from './component/payment-page/payment-page.component';
import { PaymentRedirectorComponent } from './component/payment-redirector/payment-redirector.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonsModule } from 'app/shared/buttons/buttons.module';
import { PaymentPageSubHeaderComponent } from './component/payment-page-sub-header/payment-page-sub-header.component';
import { CardsModule } from 'app/shared/cards/card.module';
import { PaymentHistoryItemComponent } from './component/payment-history-item/payment-history-item.component';
import { MatIconModule } from '@angular/material/icon';
import { CurrencyUAModule } from 'app/shared/pipes/currency-ua/currency-ua.module';
import { InputsModule } from 'app/shared/inputs/inputs.module';


@NgModule({
    declarations: [
        PaymentDetailsComponent,
        PersonalDataComponent,
        PaymentPageComponent,
        PaymentRedirectorComponent,
        PaymentPageSubHeaderComponent,
        PaymentHistoryItemComponent
    ],
    imports: [
        CommonModule,
        PaymentRoutingModule,
        ReactiveFormsModule,

        CurrencyUAModule,
        ButtonsModule,
        MatIconModule,
        CardsModule,
        InputsModule
    ]
})
export class PaymentModule { }
