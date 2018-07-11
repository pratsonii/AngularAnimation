import { Component } from '@angular/core';
import { trigger, style, transition, animate, group } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
  trigger('flyInOut', [
    transition(':enter', [
      style({transform: 'translateX(-100%)'}),
      animate(350)
    ]),
    transition(':leave', [
      animate(350, style({transform:  'translateX(-100%)'}))
    ])
  ]),

  trigger('flyOutIn', [
    transition(':enter', [
      style({transform: 'translateX(100%)'}),
      animate(350)
    ]),
    transition(':leave', [
      animate(350, style({transform:  'translateX(100%)'}))
    ])
  ])
]
})
export class AppComponent {
  title = 'app';
  show : boolean = true;

  toggle()
  {
    this.show = this.show ? false : true;
  }
}
