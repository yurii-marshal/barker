import { Component, OnInit } from '@angular/core';
import { DictionariesService } from 'app/core/services/dictionaries.service';
import { MatDialog } from '@angular/material/dialog';
import {
    CancelSubscriptionDialogComponent
} from 'app/main/user/dialogs/cancel-subscription-dialog/component/cancel-subscription-dialog/cancel-subscription-dialog.component';
import {
    PauseSubscriptionDialogComponent
} from 'app/main/user/dialogs/pause-subscription-dialog/components/pause-subscription-dialog/pause-subscription-dialog.component';
import {
    ChangeSubscriptionDialogComponent
} from 'app/main/user/dialogs/change-subscription-dialog/components/change-subscription-dialog/change-subscription-dialog.component';
import { SubscriptionTypeModel } from 'app/shared/models/subscription-type.model';

@Component({
    selector: 'bar-subscription-tile',
    templateUrl: './subscription-tile.component.html',
    styleUrls: ['./subscription-tile.component.scss']
})
export class SubscriptionTileComponent implements OnInit {

    public subscription: SubscriptionTypeModel;
    public isSubscriptionPaused: boolean;

    constructor(
        private dialog: MatDialog,
        private dictionaries: DictionariesService
    ) { }

    ngOnInit(): void {
        this.subscription = this.dictionaries.getSubscriptionById(1);
    }

    public changeSubscription(): void {
        this.dialog.open(ChangeSubscriptionDialogComponent, {
            panelClass: 'change-subscription-dialog-container'
        });
    }

    public pauseSubscription(): void {
        this.dialog.open(PauseSubscriptionDialogComponent, {
            panelClass: 'pause-subscription-dialog-container'
        });
    }

    public cancelSubscription(): void {
        this.dialog.open(CancelSubscriptionDialogComponent, {
            panelClass: 'cancel-subscription-dialog-container'
        });
    }

}
