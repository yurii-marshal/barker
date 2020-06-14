import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersHistoryDialogComponent } from './components/orders-history-dialog/orders-history-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { ButtonsModule } from 'app/shared/buttons/buttons.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PetsSwitcherModule } from 'app/shared/pets-switcher/pets-switcher.module';
import { HistoryItemModule } from 'app/shared/history-item/history-item.module';
import { CommentModule } from 'app/shared/comment/comment.module';



@NgModule({
    declarations: [OrdersHistoryDialogComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ButtonsModule,
        MatIconModule,
        PetsSwitcherModule,
        HistoryItemModule,
        CommentModule
    ],
    exports: [OrdersHistoryDialogComponent]
})
export class OrdersHistoryDialogModule { }
