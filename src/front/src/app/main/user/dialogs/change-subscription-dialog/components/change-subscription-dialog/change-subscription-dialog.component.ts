import { Component, OnInit, Inject } from '@angular/core';
import { transitionEaseOut } from 'styles/animations';
import { SubscriptionService } from 'app/main/user/services/subscription.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'app/main/user/models';

@Component({
    selector: 'bar-change-subscription-dialog',
    templateUrl: './change-subscription-dialog.component.html',
    styleUrls: ['./change-subscription-dialog.component.scss'],
    animations: [transitionEaseOut()]
})
export class ChangeSubscriptionDialogComponent implements OnInit {
    public userData: User;

    private currentDateString: string;

    public changeSubscriptionFormGroup: FormGroup;

    constructor(
        private subscriptionService: SubscriptionService,
        public dialogRef: MatDialogRef<ChangeSubscriptionDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

    ngOnInit(): void {
        this.userData = this.subscriptionService.getUserPersonalData();

        this.currentDateString =
            `${this.userData?.subscriptionDate.getFullYear()}
        -${this.userData?.subscriptionDate.getMonth()}
        -${this.userData?.subscriptionDate.getDate()}`;

        this.changeSubscriptionFormGroup = new FormGroup({
            address: new FormControl(this.userData?.address, Validators.required),
            day: new FormControl(this.currentDateString, Validators.required)
        });
    }

    public setTimeRestart(data: { date: string, time: string }) {
        this.userData.deliveryDay = data.date;
        this.userData.deliveryTime = data.time;
    }

    public saveSubscription(form: FormGroup): void {
        this.subscriptionService.saveSubscription(this.userData?.id)
            .subscribe(() => {
                this.dialogRef.close();
            });
    }

    public close(): void {
        this.dialogRef.close();
    }

}
