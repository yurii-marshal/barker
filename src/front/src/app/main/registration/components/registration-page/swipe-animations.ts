import { animate, group, query, style, transition, trigger } from '@angular/animations';

const animationTime = '.5s';
const transitionFunc = 'ease-out';

const initState = query(
    ':enter, :leave',
    style({ position: 'fixed', width: '100%' }),
    { optional: true }
);

const fromLeft = query(
    ':enter',
    [
        style({ transform: 'translateX(-100%)' }),
        animate(
            `${animationTime} ${transitionFunc}`,
            style({ transform: 'translateX(0%)' })
        )
    ],
    { optional: true }
);

const toLeft = query(
    ':leave',
    [
        style({ transform: 'translateX(0%)' }),
        animate(
            `${animationTime} ${transitionFunc}`,
            style({ transform: 'translateX(-100%)' })
        )
    ],
    { optional: true }
);

const fromRight = query(
    ':enter',
    [
        style({ transform: 'translateX(100%)' }),
        animate(
            `${animationTime} ${transitionFunc}`,
            style({ transform: 'translateX(0%)' })
        )
    ],
    { optional: true }
);

const toRight = query(
    ':leave',
    [
        style({ transform: 'translateX(0%)' }),
        animate(
            `${animationTime} ${transitionFunc}`,
            style({ transform: 'translateX(100%)' })
        )
    ],
    { optional: true }
);

export const swipeAnimations = trigger('swipeAnimations', [
    transition('1 => 2', [initState, group([fromLeft, toRight])]),
    transition('2 => 3', [initState, group([fromLeft, toRight])]),
    transition('3 => 1', [initState, group([fromLeft, toRight])]),
    transition('2 => 1', [initState, group([fromRight, toLeft])]),
    transition('3 => 2', [initState, group([fromRight, toLeft])]),
    transition('1 => 3', [initState, group([fromRight, toLeft])])
]);

export class SwipeAnimationManager {
    public get state(): 1 | 2 | 3 {
        return this.innerState;
    }
    private innerState: 1 | 2 | 3 = 1;

    public next(): void {
        switch (this.state) {
            case 1:
                this.innerState = 2;
                break;
            case 2:
                this.innerState = 3;
                break;
            case 3:
                this.innerState = 1;
                break;
        }
    }

    public prev(): void {
        switch (this.state) {
            case 3:
                this.innerState = 2;
                break;
            case 2:
                this.innerState = 1;
                break;
            case 1:
                this.innerState = 3;
                break;
        }
    }
}
