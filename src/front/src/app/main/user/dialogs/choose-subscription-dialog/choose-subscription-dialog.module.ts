import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChooseSubscriptionDialogComponent } from './components/choose-subscription-dialog.component';
import { SubscriptionsListModule } from 'app/shared/subscriptions-list/subscriptions-list.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonsModule } from 'app/shared/buttons/buttons.module';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
    declarations: [ChooseSubscriptionDialogComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SubscriptionsListModule,
        MatDialogModule,
        ButtonsModule,
        MatIconModule
    ],
    exports: [ChooseSubscriptionDialogComponent]
})
export class ChooseSubscriptionDialogModule { }
