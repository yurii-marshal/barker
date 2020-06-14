import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ButtonsModule } from '../buttons/buttons.module';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [HeaderComponent],
    imports: [
        CommonModule,
        ButtonsModule,
        RouterModule
    ],
    exports: [HeaderComponent]
})
export class HeaderModule { }
