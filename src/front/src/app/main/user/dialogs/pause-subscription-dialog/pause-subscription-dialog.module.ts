import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PauseSubscriptionDialogComponent } from './components/pause-subscription-dialog/pause-subscription-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonsModule } from 'app/shared/buttons/buttons.module';
import { MatIconModule } from '@angular/material/icon';
import { InputsModule } from 'app/shared/inputs/inputs.module';
import { TimepickerListModule } from 'app/shared/timepicker-list/timepicker-list.module';



@NgModule({
    declarations: [PauseSubscriptionDialogComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ButtonsModule,
        MatIconModule,
        InputsModule,
        TimepickerListModule
    ],
    exports: [PauseSubscriptionDialogComponent]
})
export class PauseSubscriptionDialogModule { }
