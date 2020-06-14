import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackDialogComponent } from './components/feedback-dialog/feedback-dialog.component';
import { ButtonsModule } from 'app/shared/buttons/buttons.module';
import { MatIconModule } from '@angular/material/icon';
import { InputsModule } from 'app/shared/inputs/inputs.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
    declarations: [FeedbackDialogComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ButtonsModule,
        MatIconModule,
        InputsModule
    ],
    exports: [FeedbackDialogComponent]
})
export class FeedbackDialogModule { }
