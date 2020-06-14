import { Component, OnInit, Inject } from '@angular/core';
import { RegistrationSteps } from 'app/main/registration/models';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { transitionEaseOut } from 'styles/animations';

@Component({
    selector: 'bar-check-up-edit-dialog',
    templateUrl: './check-up-edit-dialog.component.html',
    styleUrls: ['./check-up-edit-dialog.component.scss'],
    animations: [transitionEaseOut()]
})
export class CheckUpEditDialogComponent implements OnInit {
    public steps: typeof RegistrationSteps = RegistrationSteps;

    constructor(
        public dialogRef: MatDialogRef<CheckUpEditDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public currentStep: typeof RegistrationSteps
    ) { }

    ngOnInit(): void {
        console.log(this.currentStep);
    }

    public close(): void {
        this.dialogRef.close(false);
    }

    public saveChanges(): void {
        this.dialogRef.close(true);
    }

}
