import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';

import { ButtonsModule } from 'app/shared/buttons/buttons.module';
import { CheckUpEditDialogComponent } from './components/check-up-edit-dialog/check-up-edit-dialog.component';
import { FormsModule } from '@angular/forms';



@NgModule({
    declarations: [CheckUpEditDialogComponent],
    imports: [
        CommonModule,
        FormsModule,
        MatIconModule,
        ButtonsModule
    ],
    exports: [CheckUpEditDialogComponent]
})
export class CheckUpEditModule { }
