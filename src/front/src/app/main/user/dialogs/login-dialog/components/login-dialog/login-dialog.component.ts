import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginService } from 'app/auth/services/login.service';
import { transitionEaseOut } from 'styles/animations';

@Component({
    selector: 'bar-login-dialog',
    templateUrl: './login-dialog.component.html',
    styleUrls: ['./login-dialog.component.scss'],
    animations: [transitionEaseOut()]
})
export class LoginDialogComponent implements OnInit {
    public phoneForm: FormGroup;
    public emailForm: FormGroup;
    public confirmForm: FormGroup;

    public byPhone = true;
    public loginState: 'method' | 'confirmation' = 'method';

    public canSendPassword = true;

    constructor(
        private fb: FormBuilder,
        private loginService: LoginService,
        public dialogRef: MatDialogRef<LoginDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

    ngOnInit(): void {
        this.phoneForm = this.fb.group({
            phone: this.fb.control('', [Validators.required])
        });

        this.emailForm = this.fb.group({
            email: this.fb.control('', [Validators.required, Validators.email])
        });

        this.confirmForm = this.fb.group({
            password: this.fb.control('', [Validators.required])
        });
    }

    public sendLogin(form: FormGroup): void {
        this.loginService.login(form.value)
            .subscribe(() => {
                this.loginState = 'confirmation';
            });
    }

    public sendPassword(form: FormGroup) {
        this.loginService.sendPassword(form.value)
            .subscribe(() => {
                this.canSendPassword = false;
            });
    }

    public close(): void {
        this.dialogRef.close();
    }

}
