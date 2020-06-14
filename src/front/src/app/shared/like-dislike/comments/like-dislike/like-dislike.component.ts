import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'bar-like-dislike',
    templateUrl: './like-dislike.component.html',
    styleUrls: ['./like-dislike.component.scss']
})
export class LikeDislikeComponent {
    @Input()
    public isLiked: boolean;

    @Output()
    public isLikedChange: EventEmitter<boolean> = new EventEmitter();

    constructor() { }

    public setLikeOrDislike(state: boolean): void {
        this.isLiked = this.isLiked === state ? null : state;

        this.isLikedChange.emit(state);
    }

}
