import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileMenuComponent } from './components/mobile-menu/mobile-menu.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';



@NgModule({
    declarations: [MobileMenuComponent],
    imports: [
        CommonModule,
        MatIconModule,
        RouterModule
    ],
    exports: [MobileMenuComponent]
})
export class MobileMenuModule { }
