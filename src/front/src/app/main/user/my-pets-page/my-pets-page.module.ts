import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ButtonsModule } from 'app/shared/buttons/buttons.module';

import { MyPetsPageComponent } from './components/my-pets-page/my-pets-page.component';
import { OrdersHistoryComponent } from './components/orders-history/orders-history.component';
import { PetProfileComponent } from './components/pet-profile/pet-profile.component';
import { PetRedirectorComponent } from './components/pet-redirector/pet-redirector.component';
import { PetsPageSubHeaderComponent } from './components/pets-page-sub-header/pets-page-sub-header.component';
import { MyPetsPageRoutingModule } from './my-pets-page-routing.module';
import { CardsModule } from 'app/shared/cards/card.module';
import { ReactiveFormsModule } from '@angular/forms';
import { InputsModule } from 'app/shared/inputs/inputs.module';
import { ChangeRecipeDialogModule } from '../dialogs/change-recipe-dialog/change-recipe-dialog.module';
import { ChooseSubscriptionDialogModule } from '../dialogs/choose-subscription-dialog/choose-subscription-dialog.module';
import { PetsSwitcherModule } from 'app/shared/pets-switcher/pets-switcher.module';
import { HistoryItemModule } from 'app/shared/history-item/history-item.module';

@NgModule({
    declarations: [
        MyPetsPageComponent,
        OrdersHistoryComponent,
        PetProfileComponent,
        PetRedirectorComponent,
        PetsPageSubHeaderComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MyPetsPageRoutingModule,
        ChangeRecipeDialogModule,
        ChooseSubscriptionDialogModule,
        PetsSwitcherModule,
        HistoryItemModule,

        ButtonsModule,
        MatIconModule,
        CardsModule,
        InputsModule
    ]
})
export class MyPetsPageModule { }
