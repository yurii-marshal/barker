import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RecipeModel } from 'app/main/registration/models';
import { SubscriptionService } from 'app/main/user/services/subscription.service';
import { Pet } from 'app/shared/models';

@Component({
    selector: 'bar-card-current-recipe',
    templateUrl: './card-current-recipe.component.html',
    styleUrls: ['./card-current-recipe.component.scss']
})
export class CardCurrentRecipeComponent {
    @Input() value: RecipeModel;
    @Input() pet: Pet;

    @Output() changeRecipe: EventEmitter<any> = new EventEmitter();

    constructor(
        public subscriptionService: SubscriptionService
    ) { }

    public recipeChange(): void {
        this.changeRecipe.next();
    }

    public pauseDelivery(): void { }

    public renewSubscription(): void {
        this.subscriptionService.renewSubscription(this.pet.subscriptionId)
            .subscribe(() => {
                // this.isSubscriptionPaused = false;
            });
    }

}
