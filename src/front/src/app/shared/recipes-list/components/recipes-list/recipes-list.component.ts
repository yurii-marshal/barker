import { Component, OnInit, ViewChild, Output, EventEmitter, forwardRef, Input } from '@angular/core';
import { FormGroup, NG_VALUE_ACCESSOR, Validators, FormControl, ControlValueAccessor } from '@angular/forms';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';
import { RecipeModel } from 'app/main/registration/models';
import { DictionariesService } from 'app/core/services/dictionaries.service';
import { MatDialog } from '@angular/material/dialog';
import { RecipeDetailsDialogComponent } from '../recipe-details-dialog/recipe-details-dialog.component';

@Component({
    selector: 'bar-recipes-list',
    templateUrl: './recipes-list.component.html',
    styleUrls: ['./recipes-list.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => RecipesListComponent),
            multi: true
        }
    ]
})
export class RecipesListComponent implements ControlValueAccessor, OnInit {
    @Input() desktopView = true;
    @Output() chooseRecipe: EventEmitter<number> = new EventEmitter();

    @ViewChild('recipesSlider') recipesSlider: NguCarousel<any>;

    public recipesFormGroup: FormGroup;

    public recipesList: RecipeModel[] = [];

    public carouselConfig: NguCarouselConfig = {
        grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
        load: this.recipesList.length,
        loop: false,
        touch: true,
        velocity: 0.2
    };

    constructor(
        private dialog: MatDialog,
        private dictionaries: DictionariesService
    ) { }

    onChange = (value: number) => { };

    onTouch = (value: number) => { };

    writeValue(recipeId: number): void {
        if (recipeId) {
            this.recipesFormGroup.controls.recipeId.patchValue(recipeId);
        }

        this.onChange(recipeId);
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouch = fn;
    }

    ngOnInit(): void {
        this.recipesList = this.dictionaries.recipesList;

        this.recipesFormGroup = new FormGroup({
            recipeId: new FormControl(1, Validators.required)
        });
    }

    public chooseOption(recipeId: number): void {
        this.chooseRecipe.next(recipeId);
    }

    public openDetailsDialog(recipeId: number): void {
        const dialogRef = this.dialog.open(RecipeDetailsDialogComponent, {
            data: recipeId,
            panelClass: 'recipe-details-dialog-container'
        });

        dialogRef.afterClosed().subscribe((data: any) => {
            if (data?.recipeId) {
                this.chooseRecipe.next(data?.recipeId);
            }
        });
    }

}
