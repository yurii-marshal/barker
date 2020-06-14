import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { NguCarouselModule } from '@ngu/carousel';
import { ButtonsModule } from 'app/shared/buttons/buttons.module';
import { CardsModule } from 'app/shared/cards/card.module';
import { FooterModule } from 'app/shared/footer/footer.module';
import { HeaderModule } from 'app/shared/header/header.module';
import { InputsModule } from 'app/shared/inputs/inputs.module';
import { MobileMenuModule } from 'app/shared/mobile-menu/mobile-menu.module';
import { CurrencyUAModule } from 'app/shared/pipes/currency-ua/currency-ua.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { MyPetsPageModule } from './my-pets-page/my-pets-page.module';
import { OrdersService } from './services/orders.service';
import { PetsService } from './services/pets.service';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user/user.component';
import { RecipesListModule } from 'app/shared/recipes-list/recipes-list.module';
import { SubscriptionsListModule } from 'app/shared/subscriptions-list/subscriptions-list.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ChangeRecipeDialogModule } from './dialogs/change-recipe-dialog/change-recipe-dialog.module';
import { PaymentModule } from './payment/payment.module';
import { AdditionalModule } from './additional/additional.module';
import { FeedbackDialogModule } from './dialogs/feedback-dialog/feedback-dialog.module';
import { CancelSubscriptionDialogModule } from './dialogs/cancel-subscription-dialog/cancel-subscription-dialog.module';
import { LoginDialogModule } from './dialogs/login-dialog/login-dialog.module';
import { PauseSubscriptionDialogModule } from './dialogs/pause-subscription-dialog/pause-subscription-dialog.module';
import { ChangeSubscriptionDialogModule } from './dialogs/change-subscription-dialog/change-subscription-dialog.module';
import { OrdersHistoryDialogModule } from './dialogs/orders-history-dialog/orders-history-dialog.module';
import { FaqModule } from './faq/faq.module';
import { FaqService } from './services/faq.service';


@NgModule({
    declarations: [UserComponent, DashboardComponent, DeliveryComponent],
    imports: [
        CommonModule,
        UserRoutingModule,
        HeaderModule,
        FooterModule,
        MobileMenuModule,
        RouterModule,
        NguCarouselModule,
        ButtonsModule,
        CardsModule,
        CurrencyUAModule,
        MatIconModule,
        InputsModule,
        RecipesListModule,
        SubscriptionsListModule,

        ChangeRecipeDialogModule,
        FeedbackDialogModule,
        CancelSubscriptionDialogModule,
        PauseSubscriptionDialogModule,
        ChangeSubscriptionDialogModule,
        LoginDialogModule,
        OrdersHistoryDialogModule,

        ReactiveFormsModule,

        MyPetsPageModule,
        PaymentModule,
        AdditionalModule,
        FaqModule
    ],
    providers: [PetsService, OrdersService, FaqService]
})
export class UserModule { }
