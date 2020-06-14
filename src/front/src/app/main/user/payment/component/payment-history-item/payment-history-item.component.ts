import { Component, Input } from '@angular/core';
import { Payment } from 'app/main/user/models/payment.model';
import { accordionEnterLeave, enterLeave } from 'styles/animations';

@Component({
    selector: 'bar-payment-history-item',
    templateUrl: './payment-history-item.component.html',
    styleUrls: ['./payment-history-item.component.scss'],
    animations: [accordionEnterLeave, enterLeave]
})
export class PaymentHistoryItemComponent {

    public isActive = false;

    @Input()
    item: Payment;

    constructor() { }

    public openFAQ(): void { }

}
