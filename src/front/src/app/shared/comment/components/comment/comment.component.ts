import { Component, Input } from '@angular/core';
import { Order } from 'app/main/user/models/order.model';

@Component({
    selector: 'bar-comment',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.component.scss']
})
export class CommentComponent {
    @Input() public item: Order;

    @Input() public textCols = 5;

    @Input() public isOpened = false;

    public comment: string;

    public isEditMode = false;

    constructor() { }

    public editComment(): void {
        this.isEditMode = true;
        this.comment = this.item.comment.slice();
    }

    public saveComment(): void {
        this.item.comment = this.comment.slice();
        this.isEditMode = false;
    }

    public cancelEditComment(): void {
        this.comment = '';
        this.isEditMode = false;
    }

}
