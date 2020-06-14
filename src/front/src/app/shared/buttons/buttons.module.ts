import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import {
    ActionButtonComponent,
    BackButtonComponent,
    FlatButtonComponent,
    HamburgerButtonComponent,
    MainButtonComponent,
    ModalButtonComponent,
    RefButtonComponent,
} from './components';



@NgModule({
    declarations: [
        MainButtonComponent,
        RefButtonComponent,
        ModalButtonComponent,
        ActionButtonComponent,
        FlatButtonComponent,
        BackButtonComponent,
        HamburgerButtonComponent
    ],
    exports: [
        MainButtonComponent,
        RefButtonComponent,
        ModalButtonComponent,
        ActionButtonComponent,
        FlatButtonComponent,
        BackButtonComponent,
        HamburgerButtonComponent
    ],
    imports: [CommonModule, MatIconModule]
})
export class ButtonsModule { }
