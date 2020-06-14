import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonsModule } from '../buttons/buttons.module';
import { ListBoxItemComponent } from './components/list-box-item/list-box-item.component';



@NgModule({
    declarations: [ListBoxItemComponent],
    imports: [
        CommonModule, ButtonsModule, FormsModule
    ],
    exports: [ListBoxItemComponent]
})
export class ListBoxItemModule { }
