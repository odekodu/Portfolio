import { animate, state, style, transition, trigger } from "@angular/animations";

export function fade(duration = 1000) {
    return trigger('fade', [
        state('void', style({ opacity: 0 })),
        transition('void <=> *', [
            animate(duration)
        ])
    ])
}