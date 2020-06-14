import { animate, AnimationTriggerMetadata, state, style, transition, trigger } from '@angular/animations';

const animationTime = '.5s';
const transitionFunc = 'ease-out';

export function transitionEaseOut(name = 'baseThemeTransition', duration = 0.25): AnimationTriggerMetadata {
    return trigger(name, [
        state('*', style({ transition: duration + 's' })),
        state('in', style({ transition: duration + 's' })),
        state('out', style({ transition: duration + 's' })),
        transition('* => in', animate(duration + 's ease-out')),
        transition('in => out', animate(duration + 's ease-out'))
    ]);
}

export const enterLeave = trigger('enterLeave', [
    transition(':enter', [
        style({ opacity: 0 }),
        animate('.5s ease-out',
            style({ opacity: 1 })
        )
    ]),
    transition(':leave', [
        style({ opacity: 1 }),
        animate('.5s ease-out',
            style({ opacity: 0 })
        )
    ])
]);

export const accordionEnterLeave = trigger('accordionEnterLeave', [
    transition(':enter', [
        style({ maxHeight: 0, overflow: 'hidden', opacity: 0 }),
        animate('.5s ease-in-out',
            style({ maxHeight: 400, opacity: 1 })
        )
    ]),
    transition(':leave', [
        style({ maxHeight: 400, overflow: 'hidden', opacity: 1 }),
        animate('.5s ease-in-out',
            style({ maxHeight: 0, opacity: 0 })
        )
    ])
]);

export const transitionToRight = trigger('transitionToRight', [
    state('open',
        style({ transform: 'translateX(0%)' })
    ),
    state('closed',
        style({ transform: 'translateX(-100%)' })
    ),
    transition('closed <=> open', [
        animate(`${animationTime} ${transitionFunc}`)
    ]),
]);
