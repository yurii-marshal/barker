import { Component, Input } from '@angular/core';
import { transitionEaseOut } from 'styles/animations';

@Component({
    selector: 'bar-card-avatar',
    templateUrl: './card-avatar.component.html',
    styleUrls: ['./card-avatar.component.scss'],
    animations: [transitionEaseOut()]
})
export class CardAvatarComponent {
    @Input() image: string;
    @Input() text: string;
    @Input() small: boolean;

    constructor() { }

}
