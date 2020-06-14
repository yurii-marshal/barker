import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CancelSubscriptionDialogComponent } from './component/cancel-subscription-dialog/cancel-subscription-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonsModule } from 'app/shared/buttons/buttons.module';
import { MatIconModule } from '@angular/material/icon';
import { InputsModule } from 'app/shared/inputs/inputs.module';



@NgModule({
    declarations: [CancelSubscriptionDialogComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ButtonsModule,
        MatIconModule,
        InputsModule
    ],
    exports: [CancelSubscriptionDialogComponent]
})
export class CancelSubscriptionDialogModule { }
