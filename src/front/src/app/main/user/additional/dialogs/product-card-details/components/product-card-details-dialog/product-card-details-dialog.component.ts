import { Component, ViewChild, Inject, OnInit } from '@angular/core';
import { NguCarouselConfig, NguCarousel, NguCarouselStore } from '@ngu/carousel';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductModel } from 'app/main/user/models';
import { enterLeave, transitionEaseOut } from 'styles/animations';

@Component({
    selector: 'bar-product-card-details-dialog',
    templateUrl: './product-card-details-dialog.component.html',
    styleUrls: ['./product-card-details-dialog.component.scss'],
    animations: [enterLeave, transitionEaseOut()]
})
export class ProductCardDetailsDialogComponent implements OnInit {
    public items = [];

    public currentItem: ProductModel;

    public carouselConfig: NguCarouselConfig = {
        grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
        load: this.items.length,
        loop: true,
        touch: true,
        velocity: 0.2,
        point: {
            visible: true,
            hideOnSingleSlide: true
        }
    };

    @ViewChild('slider') slider: NguCarousel<any>;

    constructor(
        public dialogRef: MatDialogRef<ProductCardDetailsDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

    ngOnInit(): void {
        const startIndex = this.data.items.findIndex((slide: ProductModel) => this.data?.product?.id === slide.id);
        this.items = this.data.items.slice();
        this.items = this.items.concat(this.items.splice(0, startIndex));
        this.currentItem = this.items[0];
    }

    public onmoveFn(slide: NguCarouselStore): void {
        this.currentItem = this.items[slide.currentSlide];
    }

    public chooseOption(item: ProductModel): void {
        this.dialogRef.close({ item });
    }

    public close(): void {
        this.dialogRef.close();
    }

}
