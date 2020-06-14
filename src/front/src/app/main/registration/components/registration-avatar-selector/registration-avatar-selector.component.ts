import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Gender } from 'app/shared/models/gender.enum';

import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';
import {
    AvatarSelectorDialogComponent
} from 'app/shared/avatar-selector/components/avatar-selector-dialog/avatar-selector-dialog.component';

@Component({
    selector: 'bar-registration-avatar-selector',
    templateUrl: './registration-avatar-selector.component.html',
    styleUrls: ['./registration-avatar-selector.component.scss']
})
export class RegistrationAvatarSelectorComponent {
    @Input()
    public dogName = 'Pet';

    @Input()
    public gender: Gender = Gender.male;

    @Output()
    public selectedAvatarPath: EventEmitter<string> = new EventEmitter();

    public avatars: string[] = [
        'assets/images/avatars/ava_1 1.png',
        'assets/images/avatars/ava_2.svg',
        'assets/images/avatars/ava_3.svg'
    ];

    public activeAvatar = this.avatars[0];

    @ViewChild('avatarSlider') avatarSlider: NguCarousel<any>;

    public carouselConfig: NguCarouselConfig = {
        grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
        load: this.avatars.length,
        loop: true,
        touch: true,
        velocity: 0.2
    };

    constructor(private dialog: MatDialog) { }

    openSelect() {
        const dialogRef = this.dialog.open(AvatarSelectorDialogComponent);

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);

            this.avatars.push(result);
            this.activeAvatar = result;
        });
    }

}
