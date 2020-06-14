import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeComponent } from './components/like/like.component';



@NgModule({
    declarations: [LikeComponent],
    imports: [
        CommonModule
    ],
    exports: [LikeComponent]
})
export class LikeModule { }
