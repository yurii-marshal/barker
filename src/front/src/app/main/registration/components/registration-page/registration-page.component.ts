import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { environment } from 'environments/environment';
import { Observable, Subscription } from 'rxjs';
import { map, pairwise } from 'rxjs/operators';

import { RegistrationSteps, StepState } from '../../models';
import { RegistrationStepsService } from '../../services';
import { FastDevNavigationComponent } from '../fast-dev-navigation/fast-dev-navigation.component';
import { SwipeAnimationManager, swipeAnimations } from './swipe-animations';

@Component({
    selector: 'bar-registration-page',
    templateUrl: './registration-page.component.html',
    styleUrls: ['./registration-page.component.scss'],
    animations: [swipeAnimations]
})
export class RegistrationPageComponent implements OnInit, OnDestroy {
    public progressState$: Observable<StepState>;
    public animationManager = new SwipeAnimationManager();
    public steps: typeof RegistrationSteps = RegistrationSteps;

    private activeAnimationSub$: Subscription;

    public isDev: boolean;
    public openDevMenu: () => void;

    constructor(
        private stepsService: RegistrationStepsService,
        private bottomSheet: MatBottomSheet
    ) {
        this.isDev = !environment.production;
        if (this.isDev) {
            this.openDevMenu = () => {
                this.bottomSheet.open(FastDevNavigationComponent);
            };
        }
    }

    public ngOnInit(): void {
        this.progressState$ = this.stepsService.activeStep;

        this.activeAnimationSub$ = this.progressState$
            .pipe(
                map((s: StepState) => s.step),
                pairwise()
            )
            .subscribe(([prev, next]) => {
                if (prev > next) {
                    this.animationManager.next();
                } else {
                    this.animationManager.prev();
                }
            });
    }

    public ngOnDestroy(): void {
        this.activeAnimationSub$?.unsubscribe();
    }
}
