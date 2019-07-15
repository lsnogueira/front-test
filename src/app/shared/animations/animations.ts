import {
  animate,
  keyframes,
  query,
  stagger,
  style,
  transition,
  trigger,
  state
} from '@angular/animations';

export const slideStateTrigger = trigger('slideState', [
  transition(':leave', [
    animate('500ms ease-in', keyframes([
      style({
        transform: 'translateX(0)'
      }),
      style({
        transform: 'translateX(0)'
      }),
      style({
        transform: 'translateX(100%)'
      })
    ]))
  ]),
  transition(':enter', [
    animate('500ms ease-in', keyframes([
      style({
        transform: 'translateX(100%)'
      }),
      style({
        transform: 'translateX(0)'
      }),
      style({
        transform: 'translateX(0)'
      })
    ]))
  ])
]);

export const slideDownStateTrigger = trigger('slideDownState', [
  transition(':leave', [
    animate(
      '500ms ease-in',
      keyframes([
        style({
          transform: 'translateY(0)'
        }),
        style({
          transform: 'translateY(0)'
        }),
        style({
          transform: 'translateY(-100%)'
        })
      ])
    )
  ]),
  transition(':enter', [
    animate(
      '500ms ease-in',
      keyframes([
        style({
          transform: 'translateY(-100%)'
        }),
        style({
          transform: 'translateY(0)'
        }),
        style({
          transform: 'translateY(0)'
        })
      ])
    )
  ])
]);

export const fadeStateTrigger = trigger('fadeState', [
  transition(':leave', [
    animate('300ms ease-in', keyframes([
      style({
        opacity: 1,
      }),
      style({
        opacity: 0,
      })
    ]))
  ]),
  transition(':enter', [
    animate('700ms ease-in', keyframes([
      style({
        opacity: 0,
      }),
      style({
        opacity: 1,
      })
    ]))
  ])
]);
