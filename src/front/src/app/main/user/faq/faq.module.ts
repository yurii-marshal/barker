import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './components/faq/faq.component';
import { MatIconModule } from '@angular/material/icon';
import { SimpleExpanderModule } from 'app/shared/simple-expander/simple-expander.module';



@NgModule({
    declarations: [FaqComponent],
    imports: [
        CommonModule,
        MatIconModule,
        SimpleExpanderModule
    ],
    exports: [FaqComponent]
})
export class FaqModule { }
