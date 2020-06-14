import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardAvatarComponent } from './components';
import { DeliveryTileComponent } from './components/delivery-tile/delivery-tile.component';
import { ButtonsModule } from '../buttons/buttons.module';
import { MatIconModule } from '@angular/material/icon';
import { CurrencyUAModule } from '../pipes/currency-ua/currency-ua.module';
import { CardCurrentRecipeComponent } from './components/card-current-recipe/card-current-recipe.component';
import { CardAvailableProductComponent } from './components/card-available-product/card-available-product.component';
import { CardChosenProductComponent } from './components/card-chosen-product/card-chosen-product.component';
import { InputsModule } from '../inputs/inputs.module';
import { SubscriptionTileComponent } from './components/subscription-tile/subscription-tile.component';
import { PausedSubscriptionTileComponent } from './components/paused-subscription-tile/paused-subscription-tile.component';
import { SharedModule } from '../shared.module';
import { ShortCardProductComponent } from './components/short-card-product/short-card-product.component';



@NgModule({
    declarations: [
        CardAvatarComponent,
        DeliveryTileComponent,
        CardCurrentRecipeComponent,
        CardChosenProductComponent,
        CardAvailableProductComponent,
        SubscriptionTileComponent,
        PausedSubscriptionTileComponent,
        ShortCardProductComponent
    ],
    imports: [
        CommonModule,
        ButtonsModule,
        InputsModule,
        MatIconModule,
        CurrencyUAModule,
        SharedModule
    ],
    exports: [
        CardAvatarComponent,
        DeliveryTileComponent,
        CardCurrentRecipeComponent,
        CardChosenProductComponent,
        CardAvailableProductComponent,
        SubscriptionTileComponent,
        PausedSubscriptionTileComponent,
        ShortCardProductComponent
    ]
})
export class CardsModule { }
