import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'bar-like',
    templateUrl: './like.component.html',
    styleUrls: ['./like.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LikeComponent {
    @Input() public type: 'like' | 'dislike';

    @Input() public isActive = false;

    public get color(): string {
        if (this.isActive === false) {
            return '#D9D9D9';
        } else {
            return this.type === 'like' ? '#A2E88A' : '#E0632B';
        }
    }

    constructor() { }

}
