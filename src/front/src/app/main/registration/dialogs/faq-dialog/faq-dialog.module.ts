import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqDialogComponent } from './components/faq-dialog/faq-dialog.component';
import { SimpleExpanderModule } from 'app/shared/simple-expander/simple-expander.module';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
    declarations: [FaqDialogComponent],
    imports: [
        CommonModule,
        MatIconModule,
        SimpleExpanderModule
    ],
    exports: [FaqDialogComponent]
})
export class FaqDialogModule { }
