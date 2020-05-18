import { Component } from '@angular/core';
import { trigger, transition, query as q, style, sequence, animateChild, animate, group } from '@angular/animations';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

export function query(s, a) {
    return q(s, a, { optional: true });
}

export const slideInAnimation = trigger('routeAnimations', [
    transition('ProfilePage <=> AboutPage', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            }),
        ]),
        query(':enter', [style({ left: '-100%' })]),
        query(':leave', animateChild()),
        group([
            query(':leave', [animate('300ms ease-out', style({ left: '100%' }))]),
            query(':enter', [animate('300ms ease-out', style({ left: '0%' }))]),
        ]),
        query(':enter', animateChild()),
    ]),
    transition('* <=> FilterPage', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
            }),
        ]),
        query(':enter', [style({ left: '-100%' })]),
        query(':leave', animateChild()),
        group([
            query(':leave', [animate('300ms ease-out', style({ left: '100%' }))]),
            query(':enter', [animate('300ms ease-out', style({ left: '0%' }))]),
        ]),
        query(':enter', animateChild()),
    ]),
    transition('LandingPage <=> *', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
            }),
        ]),
        query(':enter', [style({ left: '-100%' })]),
        query(':leave', animateChild()),
        group([
            query(':leave', [animate('300ms ease-out', style({ left: '100%' }))]),
            query(':enter', [animate('300ms ease-out', style({ left: '0%' }))]),
        ]),
        query(':enter', animateChild()),
    ])
]);


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    animations: [slideInAnimation]
})
export class AppComponent {

    constructor(private route: ActivatedRoute) { }

    animationState: number;

    onActivate($event) {
        console.log($event);
    }
    
    prepareRoute(outlet: RouterOutlet) {
        return (
          outlet &&
          outlet.activatedRouteData &&
          outlet.activatedRouteData['animation']
        );
      }
}
