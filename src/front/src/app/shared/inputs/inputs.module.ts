import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { SharedModule } from '../shared.module';
import { InputComponent, SelectComponent, TextareaComponent } from './components';
import { CounterComponent } from './components/counter/counter.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { DateSelectorComponent } from './components/date-selector/date-selector.component';



@NgModule({
    declarations: [
        InputComponent,
        TextareaComponent,
        SelectComponent,
        CounterComponent,
        CheckboxComponent,
        DateSelectorComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ScrollingModule,
        MatIconModule,
        SharedModule
    ],
    exports: [
        InputComponent,
        TextareaComponent,
        SelectComponent,
        CounterComponent,
        CheckboxComponent,
        DateSelectorComponent
    ]
})
export class InputsModule { }
