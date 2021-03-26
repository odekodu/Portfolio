import { animate, keyframes, state, style, transition, trigger } from "@angular/animations";

export function spin() {
    return trigger('spin', [
        state('void', style({})),
        transition('void <=> *', [
            animate('1000ms ease-in', keyframes([

            ])),
        ])
    ])
}