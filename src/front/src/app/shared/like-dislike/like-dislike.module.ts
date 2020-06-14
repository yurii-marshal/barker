import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeDislikeComponent } from './comments/like-dislike/like-dislike.component';
import { LikeModule } from '../like/like.module';



@NgModule({
    declarations: [LikeDislikeComponent],
    imports: [
        CommonModule,
        LikeModule
    ],
    exports: [LikeDislikeComponent]
})
export class LikeDislikeModule { }
