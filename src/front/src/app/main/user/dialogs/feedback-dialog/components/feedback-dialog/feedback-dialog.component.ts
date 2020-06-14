import { Component, OnInit, Inject } from '@angular/core';
import { transitionEaseOut } from 'styles/animations';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SubscriptionService } from 'app/main/user/services/subscription.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Order } from 'app/main/user/models/order.model';

@Component({
    selector: 'bar-feedback-dialog',
    templateUrl: './feedback-dialog.component.html',
    styleUrls: ['./feedback-dialog.component.scss'],
    animations: [transitionEaseOut()]
})
export class FeedbackDialogComponent implements OnInit {
    public ordersList: Order[];

    public feedbackForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private subscriptionService: SubscriptionService,
        public dialogRef: MatDialogRef<FeedbackDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

    ngOnInit(): void {
        this.feedbackForm = this.fb.group({
            orderId: this.fb.control({value: '', disabled: this.feedbackForm?.controls?.common?.value === true}),
            common: this.fb.control(false),
            message: this.fb.control('', Validators.required)
        });

        this.ordersList = this.subscriptionService.getOrdersList();
    }

    public sendFeedback(form: FormGroup): void {
        // TODO: save feedback
        this.subscriptionService.sendFeedback(form.value)
            .subscribe(() => {
                this.dialogRef.close();
            });
    }

    public close(): void {
        this.dialogRef.close();
    }

}
