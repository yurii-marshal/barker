import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryItemComponent } from './components/history-item/history-item.component';
import { MatIconModule } from '@angular/material/icon';
import { CommentModule } from '../comment/comment.module';
import { CardsModule } from '../cards/card.module';
import { NguCarouselModule } from '@ngu/carousel';



@NgModule({
    declarations: [HistoryItemComponent],
    imports: [
        CommonModule,
        MatIconModule,
        CommentModule,
        CardsModule,
        NguCarouselModule
    ],
    exports: [HistoryItemComponent]
})
export class HistoryItemModule { }
