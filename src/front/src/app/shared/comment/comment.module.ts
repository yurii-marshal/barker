import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentComponent } from './components/comment/comment.component';
import { ButtonsModule } from '../buttons/buttons.module';
import { LikeDislikeModule } from '../like-dislike/like-dislike.module';
import { InputsModule } from '../inputs/inputs.module';
import { FormsModule } from '@angular/forms';



@NgModule({
    declarations: [CommentComponent],
    imports: [
        CommonModule,
        ButtonsModule,
        LikeDislikeModule,
        FormsModule,
        InputsModule
    ],
    exports: [CommentComponent]
})
export class CommentModule { }
