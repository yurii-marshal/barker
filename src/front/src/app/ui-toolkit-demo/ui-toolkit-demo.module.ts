import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ButtonsModule } from 'app/shared/buttons/buttons.module';
import { CardsModule } from 'app/shared/cards/card.module';
import { InputsModule } from 'app/shared/inputs/inputs.module';
import { ListBoxItemModule } from 'app/shared/list-box-item/list-box-item.module';
import { ShoppingCartModule } from 'app/shared/shopping-cart/shopping-cart.module';

import { UiDemoPageComponent } from './ui-demo-page/ui-demo-page.component';
import { UiToolkitDemoRoutingModule } from './ui-toolkit-demo-routing.module';

@NgModule({
    declarations: [UiDemoPageComponent],
    imports: [
        CommonModule,
        UiToolkitDemoRoutingModule,
        ButtonsModule,
        ReactiveFormsModule,
        FormsModule,
        ListBoxItemModule,
        MatIconModule,
        CardsModule,
        ShoppingCartModule,
        InputsModule
    ],
})
export class UiToolkitDemoModule { }
