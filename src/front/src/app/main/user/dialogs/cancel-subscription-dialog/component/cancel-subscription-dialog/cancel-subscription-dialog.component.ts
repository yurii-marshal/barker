import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { transitionEaseOut, enterLeave } from 'styles/animations';
import { SubscriptionService } from 'app/main/user/services/subscription.service';
import { User } from 'app/main/user/models';

@Component({
    selector: 'bar-cancel-subscription-dialog',
    templateUrl: './cancel-subscription-dialog.component.html',
    styleUrls: ['./cancel-subscription-dialog.component.scss'],
    animations: [enterLeave, transitionEaseOut()]
})
export class CancelSubscriptionDialogComponent implements OnInit {
    public userData: User;

    constructor(
        private subscriptionService: SubscriptionService,
        public dialogRef: MatDialogRef<CancelSubscriptionDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

    ngOnInit(): void {
        this.userData = this.subscriptionService.getUserPersonalData();
    }

    public cancelSubscription(): void {
        this.subscriptionService.cancelSubscription()
            .subscribe(() => {
                this.dialogRef.close();
            });
    }

    public close(): void {
        this.dialogRef.close();
    }

}
