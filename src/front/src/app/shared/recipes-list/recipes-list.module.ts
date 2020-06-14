import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesListComponent } from './components/recipes-list/recipes-list.component';
import { NguCarouselModule } from '@ngu/carousel';
import { ButtonsModule } from '../buttons/buttons.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipeDetailsDialogComponent } from './components/recipe-details-dialog/recipe-details-dialog.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
    declarations: [RecipesListComponent, RecipeDetailsDialogComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        NguCarouselModule,
        ButtonsModule,
        MatIconModule
    ],
    exports: [RecipesListComponent, RecipeDetailsDialogComponent]
})
export class RecipesListModule { }
