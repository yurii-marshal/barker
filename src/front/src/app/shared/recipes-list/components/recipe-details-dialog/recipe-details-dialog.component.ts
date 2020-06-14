import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { transitionEaseOut } from 'styles/animations';

import { RecipeModel } from 'app/main/registration/models';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';
import { DictionariesService } from 'app/core/services/dictionaries.service';

@Component({
    selector: 'bar-recipe-details-dialog',
    templateUrl: './recipe-details-dialog.component.html',
    styleUrls: ['./recipe-details-dialog.component.scss'],
    animations: [transitionEaseOut()]
})
export class RecipeDetailsDialogComponent implements OnInit {

    public slides: RecipeModel[] = [];

    @ViewChild('recipeSlider') recipeSlider: NguCarousel<any>;

    public carouselConfig: NguCarouselConfig = {
        grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
        load: this.slides.length,
        loop: true,
        touch: false,
        velocity: 0.2
    };

    public currentIngredientDescription: string;

    constructor(
        private dictionaries: DictionariesService,
        public dialogRef: MatDialogRef<RecipeDetailsDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public firstSlideId: number
    ) { }

    ngOnInit() {
        this.slides = this.dictionaries.recipesList;
        this.slides = this.slides
            .splice(this.slides.findIndex((slide) => this.firstSlideId === slide.id))
            .concat(this.slides);
    }

    public sliderLoaded(): void {
        this.recipeSlider.activePoint = this.slides.findIndex((slide) => this.firstSlideId === slide.id);
    }

    public chooseOption(id: number): void {
        this.dialogRef.close({ recipeId: id });
    }

    public close(): void {
        this.dialogRef.close();
    }

}
