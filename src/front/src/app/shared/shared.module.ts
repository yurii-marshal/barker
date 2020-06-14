import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { OnlyNumbersDirective } from './directives/only-numbers.directive';
import { MaxLengthDirective } from './directives/max-length.directive';
import { GenderDependsWordPipe } from './pipes/gender-depends-word.pipe';
import { ClickOutsideDirective } from './directives/click-outside.directive';



@NgModule({
    declarations: [
        OnlyNumbersDirective,
        MaxLengthDirective,
        GenderDependsWordPipe,
        ClickOutsideDirective
    ],
    imports: [
        CommonModule
    ],
    exports: [
        MaxLengthDirective,
        GenderDependsWordPipe,
        OnlyNumbersDirective,
        ClickOutsideDirective
    ]
})
export class SharedModule { }
