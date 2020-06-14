import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleExpanderComponent } from './components/simple-expander/simple-expander.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
    declarations: [SimpleExpanderComponent],
    imports: [
        CommonModule,
        MatIconModule
    ],
    exports: [SimpleExpanderComponent]
})
export class SimpleExpanderModule { }
