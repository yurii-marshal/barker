import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimepickerListComponent } from './components/timepicker-list/timepicker-list.component';
import { ButtonsModule } from '../buttons/buttons.module';
import { MatIconModule } from '@angular/material/icon';
import { NguCarouselModule } from '@ngu/carousel';
import { ListBoxItemModule } from '../list-box-item/list-box-item.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared.module';



@NgModule({
    declarations: [TimepickerListComponent],
    imports: [
        CommonModule,
        FormsModule,
        NguCarouselModule,
        ButtonsModule,
        MatIconModule,
        ListBoxItemModule,

        SharedModule
    ],
    exports: [TimepickerListComponent]
})
export class TimepickerListModule { }
