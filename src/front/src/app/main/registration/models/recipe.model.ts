import { NutritionModel, IngredientModel } from '.';

export interface RecipeModel {
    id: number;
    name: string;
    description?: string[];
    imgSrc: string;
    value?: boolean;
    price?: number;

    // details
    nutritionList?: NutritionModel[];
    ingredientList?: IngredientModel[];
    portionCount?: number;
    portionWeight?: number;
    pauseTimeTo?: string;
    pauseWeekdayTo?: string;
}
