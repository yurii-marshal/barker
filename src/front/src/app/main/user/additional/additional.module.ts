import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdditionalRoutingModule } from './additional-routing.module';
import { SnacksComponent } from './components/snacks/snacks.component';
import { MerchandiseComponent } from './components/merchandise/merchandise.component';
import { AdditionalPageComponent } from './components/additional-page/additional-page.component';
import { CardsModule } from 'app/shared/cards/card.module';
import { ProductCardDetailsModule } from './dialogs/product-card-details/product-card-details.module';


@NgModule({
    declarations: [
        SnacksComponent,
        MerchandiseComponent,
        AdditionalPageComponent
    ],
    imports: [
        CommonModule,
        AdditionalRoutingModule,
        ProductCardDetailsModule,
        CardsModule
    ]
})
export class AdditionalModule { }
