import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AvatarSelectorDialogComponent } from './components/avatar-selector-dialog/avatar-selector-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { ButtonsModule } from '../buttons/buttons.module';
import { SharedModule } from '../shared.module';

@NgModule({
    declarations: [AvatarSelectorDialogComponent],
    imports: [
        CommonModule,
        MatIconModule,
        ButtonsModule,
        SharedModule
    ],
    exports: [AvatarSelectorDialogComponent]
})
export class AvatarSelectorModule { }
