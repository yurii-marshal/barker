import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Payment } from 'app/main/user/models/payment.model';
import { PaymentsService } from 'app/main/user/services/payments.service';
import { SubscriptionService } from 'app/main/user/services/subscription.service';
import { SubscriptionTypeModel } from 'app/shared/models/subscription-type.model';

@Component({
    selector: 'bar-payment-details',
    templateUrl: './payment-details.component.html',
    styleUrls: ['./payment-details.component.scss']
})
export class PaymentDetailsComponent implements OnInit {

    public payments$: Observable<Payment[]>;

    public subscription: SubscriptionTypeModel;

    constructor(
        private paymentsService: PaymentsService,
        private subscriptionService: SubscriptionService
    ) { }

    ngOnInit(): void {
        this.payments$ = this.paymentsService.getPayments(0);
        this.subscription = this.subscriptionService.getSubscriptionById(0);
    }

    public changeCard(): void { }

}
