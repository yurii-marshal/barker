import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginDialogComponent } from './components/login-dialog/login-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonsModule } from 'app/shared/buttons/buttons.module';
import { MatIconModule } from '@angular/material/icon';
import { InputsModule } from 'app/shared/inputs/inputs.module';



@NgModule({
    declarations: [LoginDialogComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ButtonsModule,
        MatIconModule,
        InputsModule
    ],
    exports: [LoginDialogComponent]
})
export class LoginDialogModule { }
