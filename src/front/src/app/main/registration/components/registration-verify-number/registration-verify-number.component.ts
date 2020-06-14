import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RegistrationSteps, BaseStep } from '../../models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationStoreService, RegistrationStepsService } from '../../services';
import { SubscriptionTypeModel } from 'app/shared/models/subscription-type.model';

@Component({
    selector: 'bar-registration-verify-number',
    templateUrl: './registration-verify-number.component.html',
    styleUrls: ['./registration-verify-number.component.scss']
})
export class RegistrationVerifyNumberComponent extends BaseStep<null> implements OnInit {
    @ViewChild('phone') phoneInput: ElementRef;

    public verifyNumberForm: FormGroup;

    public savedData: SubscriptionTypeModel;

    public phoneNumber: string;

    public isChangeMode = false;
    public isResent = false;

    constructor(
        private fb: FormBuilder,
        protected storeService: RegistrationStoreService,
        protected stepsService: RegistrationStepsService
    ) {
        super(RegistrationSteps.VerifyNumber, stepsService, storeService);
    }

    ngOnInit(): void {
        this.savedData = this.storeService.getStoreValue('subscription') as SubscriptionTypeModel;

        this.phoneNumber = this.savedData?.phone;

        this.verifyNumberForm = this.fb.group({
            phone: this.fb.control(this.savedData?.phone || '', Validators.required),
            password: this.fb.control(this.savedData?.password || '', Validators.required),
        });
    }

    public changePhoneNumber(): void {
        this.isChangeMode = true;
        this.phoneInput.nativeElement.focus();
    }

    public sendToPhoneNumber(): void {
        this.isChangeMode = false;
        this.phoneNumber = this.verifyNumberForm.controls.phone.value;
    }

    public cancelInput(): void {
        this.isChangeMode = false;
        this.verifyNumberForm.controls.phone.patchValue('');
    }

    public resendRequestOnCode(): void {
        this.isResent = true;
    }

    public nextStep(): void {
        this.storeService.patchStoreValue('subscription', this.verifyNumberForm.value);
        this.stepsService.nextStep();
    }

}
