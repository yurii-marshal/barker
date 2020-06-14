import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { transitionEaseOut } from 'styles/animations';
import { PetsService } from 'app/main/user/services/pets.service';
import { Pet } from 'app/shared/models';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'bar-avatar-selector-dialog',
    templateUrl: './avatar-selector-dialog.component.html',
    styleUrls: ['./avatar-selector-dialog.component.scss'],
    animations: [transitionEaseOut()]
})
export class AvatarSelectorDialogComponent implements OnInit {

    public imageSrc: string;

    public isUploading = false;

    public isDroppable = false;

    constructor(
        private petsService: PetsService,
        public dialogRef: MatDialogRef<AvatarSelectorDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Pet
    ) { }

    ngOnInit(): void {
        this.imageSrc = this.data?.image;
    }

    public getFileOnDrop(event: any): void {
        event.preventDefault();
        event.stopPropagation();

        this.isDroppable = false;

        const files = event.dataTransfer.files;

        if (files.length > 0) {
            this.saveToAWS(files[0]);
        }
    }

    public uploadPhoto(event: any): void {
        event.preventDefault();

        this.isUploading = true;

        const pictureInput = event.target;

        if (!pictureInput.files) {
            this.isUploading = false;
            return;
        }

        this.saveToAWS(pictureInput.files[0]);
    }

    private saveToAWS(picture: File, pictureInput?: any): void {
        this.petsService.uploadPictureToAWS(picture)
            .subscribe((url: string) => {
                this.petsService.uploadPhoto(this.data?.id, { url })
                    .subscribe(() => {
                        this.imageSrc = url;
                        this.isUploading = false;

                        if (pictureInput) {
                            pictureInput.value = '';
                        }
                    });
            },
                (err: ErrorEvent) => {
                    this.isUploading = false;

                    if (pictureInput) {
                        pictureInput.value = '';
                    }

                    let message = 'Error uploading picture';

                    if (err instanceof HttpErrorResponse) {
                        message = err.error.message || err.message;
                    }
                },
            );
    }

    public dragOver(event: Event): void {
        event.preventDefault();
        this.isDroppable = true;
    }

    public dragLeave(event: Event): void {
        event.preventDefault();
        this.isDroppable = false;
    }

    public saveAvatar(): void {
        this.petsService.savePetAvatar(this.data)
            .subscribe((src: string) => {
                this.dialogRef.close(src);
            });
    }

    public close() {
        this.dialogRef.close();
    }

}
