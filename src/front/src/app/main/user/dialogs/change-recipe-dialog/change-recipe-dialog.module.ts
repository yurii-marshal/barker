import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeRecipeDialogComponent } from './components/change-recipe-dialog.component';
import { RecipesListModule } from 'app/shared/recipes-list/recipes-list.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ButtonsModule } from 'app/shared/buttons/buttons.module';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
    declarations: [ChangeRecipeDialogComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RecipesListModule,
        ButtonsModule,
        MatIconModule,
        MatDialogModule
    ],
    exports: [ChangeRecipeDialogComponent]
})
export class ChangeRecipeDialogModule { }
