import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionListComponent } from './components/subscription-list/subscription-list.component';
import { ButtonsModule } from '../buttons/buttons.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NguCarouselModule } from '@ngu/carousel';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
    declarations: [SubscriptionListComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        NguCarouselModule,
        ButtonsModule,
        MatIconModule
    ],
    exports: [SubscriptionListComponent]
})
export class SubscriptionsListModule { }
