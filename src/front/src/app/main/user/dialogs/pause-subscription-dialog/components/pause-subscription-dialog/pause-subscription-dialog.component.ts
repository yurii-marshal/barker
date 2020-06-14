import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { User } from 'app/main/user/models';
import { SubscriptionService } from 'app/main/user/services/subscription.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { enterLeave, transitionEaseOut } from 'styles/animations';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
    selector: 'bar-pause-subscription-dialog',
    templateUrl: './pause-subscription-dialog.component.html',
    styleUrls: ['./pause-subscription-dialog.component.scss'],
    animations: [enterLeave, transitionEaseOut()]
})
export class PauseSubscriptionDialogComponent implements OnInit, OnDestroy {
    public userData: User;

    public currentDate = new Date();

    public subscription = {
        timeFrom: '',
        timeTo: ''
    };

    public pauseSubscriptionFormGroup: FormGroup;

    private dateSubscription: Subscription;

    constructor(
        private subscriptionService: SubscriptionService,
        public dialogRef: MatDialogRef<PauseSubscriptionDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

    ngOnInit(): void {
        this.userData = this.subscriptionService.getUserPersonalData();

        const currentDateString = `${this.currentDate.getFullYear()}-${this.currentDate.getMonth()}-${this.currentDate.getDate()}`;

        this.pauseSubscriptionFormGroup = new FormGroup({
            dateRestart: new FormControl(currentDateString, Validators.required),
            day: new FormControl(currentDateString, Validators.required)
        });

        this.dateSubscription = this.pauseSubscriptionFormGroup.controls.dateRestart
            .valueChanges.subscribe((value: string) => {
                this.setTimepickerDate(value);
            });
    }

    ngOnDestroy(): void {
        this.dateSubscription.unsubscribe();
    }

    public setTimeRestart(data: { date: Date, time: string }) {
        if (data.time) {
            this.userData.deliveryTime = data.time;
            this.subscription.timeFrom = this.userData.deliveryTime?.split(' - ')[0] || '';
            this.subscription.timeTo = this.userData.deliveryTime?.split(' - ')[1] || '';
        }

        this.userData.subscriptionDate = data.date;
    }

    public pauseSubscription(): void {
        this.subscriptionService.pauseSubscription()
            .subscribe(() => {
                this.dialogRef.close();
            });
    }

    public close(): void {
        this.dialogRef.close();
    }

    private setTimepickerDate(value: string): void {
        const parsedValue = value.split('-');

        if (parsedValue.length) {
            this.userData.subscriptionDate =
                this.currentDate = new Date(Number(parsedValue[0]), Number(parsedValue[1]) - 1, Number(parsedValue[2]));
        }

        this.pauseSubscriptionFormGroup.controls.day.setValue(this.currentDate);
    }
}
