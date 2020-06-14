import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { ButtonsModule } from 'app/shared/buttons/buttons.module';
import { InputsModule } from 'app/shared/inputs/inputs.module';
import { ListBoxItemModule } from 'app/shared/list-box-item/list-box-item.module';
import { SharedModule } from 'app/shared/shared.module';

import { AvatarSelectorModule } from '../../shared/avatar-selector/avatar-selector.module';
import {
    RegistrationAvatarSelectorComponent,
    RegistrationBirthDateComponent,
    RegistrationHeaderComponent,
    RegistrationMainInfoComponent,
    RegistrationPageComponent,
} from './components';
import { FastDevNavigationComponent } from './components/fast-dev-navigation/fast-dev-navigation.component';
import { RegistrationActivityComponent } from './components/registration-activity/registration-activity.component';
import { RegistrationCheckUpComponent } from './components/registration-check-up/registration-check-up.component';
import { RegistrationIntroComponent } from './components/registration-intro/registration-intro.component';
import { RegistrationPathologiesComponent } from './components/registration-pathologies/registration-pathologies.component';
import { RegistrationPrefersComponent } from './components/registration-prefers/registration-prefers.component';
import {
    RegistrationProgressBarComponent,
} from './components/registration-progress-bar/registration-progress-bar.component';
import { RegistrationRecipeComponent } from './components/registration-recipe/registration-recipe.component';
import { RegistrationWeightComponent } from './components/registration-weight/registration-weight.component';
import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationStepsService } from './services';
import { RegistrationSubscribeComponent } from './components/registration-subscribe/registration-subscribe.component';
import {
    RegistrationSubscriptionDetailsComponent
} from './components/registration-subscription-details/registration-subscription-details.component';
import { RegistrationPaymentComponent } from './components/registration-payment/registration-payment.component';
import { RegistrationVerifyNumberComponent } from './components/registration-verify-number/registration-verify-number.component';
import { NguCarouselModule } from '@ngu/carousel';
import { RecipesListModule } from 'app/shared/recipes-list/recipes-list.module';
import { SubscriptionsListModule } from 'app/shared/subscriptions-list/subscriptions-list.module';
import { FaqDialogModule } from './dialogs/faq-dialog/faq-dialog.module';

@NgModule({
    declarations: [
        RegistrationPageComponent,
        RegistrationHeaderComponent,
        RegistrationIntroComponent,
        RegistrationProgressBarComponent,
        RegistrationMainInfoComponent,
        FastDevNavigationComponent,
        RegistrationBirthDateComponent,
        RegistrationAvatarSelectorComponent,
        RegistrationWeightComponent,
        RegistrationActivityComponent,
        RegistrationPathologiesComponent,
        RegistrationPrefersComponent,
        RegistrationCheckUpComponent,
        RegistrationRecipeComponent,
        RegistrationSubscribeComponent,
        RegistrationSubscriptionDetailsComponent,
        RegistrationPaymentComponent,
        RegistrationVerifyNumberComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        RegistrationRoutingModule,
        ReactiveFormsModule,
        FormsModule,

        ListBoxItemModule,
        AvatarSelectorModule,

        // Material modules
        MatIconModule,

        ButtonsModule,
        InputsModule,
        NguCarouselModule,
        RecipesListModule,
        SubscriptionsListModule,
        FaqDialogModule,
        SharedModule
    ],
    exports: [
        RegistrationMainInfoComponent,
        RegistrationBirthDateComponent,
        RegistrationWeightComponent,
        RegistrationActivityComponent,
        RegistrationPathologiesComponent,
        RegistrationPrefersComponent
    ],
    providers: [RegistrationStepsService, MatBottomSheet]
})
export class RegistrationModule {
    constructor(private stepsService: RegistrationStepsService) {
        this.stepsService.init();
    }
}
