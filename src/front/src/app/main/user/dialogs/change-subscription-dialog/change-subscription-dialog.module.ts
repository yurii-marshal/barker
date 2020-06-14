import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeSubscriptionDialogComponent } from './components/change-subscription-dialog/change-subscription-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonsModule } from 'app/shared/buttons/buttons.module';
import { MatIconModule } from '@angular/material/icon';
import { TimepickerListModule } from 'app/shared/timepicker-list/timepicker-list.module';
import { InputsModule } from 'app/shared/inputs/inputs.module';



@NgModule({
    declarations: [ChangeSubscriptionDialogComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        InputsModule,
        ButtonsModule,
        MatIconModule,
        TimepickerListModule
    ],
    exports: [ChangeSubscriptionDialogComponent]
})
export class ChangeSubscriptionDialogModule { }
