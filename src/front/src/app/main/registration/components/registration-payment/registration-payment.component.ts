import { Component, OnInit } from '@angular/core';
import { BaseStep, RegistrationSteps } from '../../models';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegistrationStoreService, RegistrationStepsService } from '../../services';
import { SubscriptionTypeModel } from 'app/shared/models/subscription-type.model';

@Component({
    selector: 'bar-registration-payment',
    templateUrl: './registration-payment.component.html',
    styleUrls: ['./registration-payment.component.scss']
})
export class RegistrationPaymentComponent extends BaseStep<null> implements OnInit {

    public paymentForm: FormGroup;
    public savedData: SubscriptionTypeModel;
    public showCardForm: boolean;

    public isVisaCardNumber = true;
    public isMasterCardNumber = true;
    public invalidCardNumber = false;

    private visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    private masterCardRegEx = /^(?:5[1-5][0-9]{14})$/;

    constructor(
        private fb: FormBuilder,
        protected storeService: RegistrationStoreService,
        protected stepsService: RegistrationStepsService
    ) {
        super(RegistrationSteps.Payment, stepsService, storeService);
    }

    ngOnInit(): void {
        this.savedData = this.storeService.getStoreValue('subscription') as SubscriptionTypeModel;

        this.paymentForm = this.fb.group({
            cardNumber: this.fb.control('', Validators.required),
            expireDate: this.fb.control('', Validators.required),
            cvv: this.fb.control('', Validators.required),
            paymentEmail: this.fb.control('', [Validators.required, Validators.email]),
        });

        this.paymentForm.controls.cardNumber.valueChanges
            .subscribe((value: string) => {
                if (value) {
                    this.isVisaCardNumber = this.visaRegEx.test(value);
                    this.isMasterCardNumber = this.masterCardRegEx.test(value);

                    this.invalidCardNumber = !this.isVisaCardNumber || !this.isMasterCardNumber;
                } else {
                    this.isMasterCardNumber = true;
                    this.isVisaCardNumber = true;
                    this.invalidCardNumber = false;
                }
            });
    }

    public openCardForm(cardType: string): void {
        this.showCardForm = true;
    }

    public redirectToApplePay(): void { }

    public sandPaymentForm(form: FormGroup): void {
        // TODO: payment API then this.router.navigate(['subscription-details'], { queryParams: {newUser: true} });
        this.stepsService.nextStep();
    }
}
