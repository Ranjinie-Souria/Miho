import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'window',
  standalone: true,
  imports: [],
  templateUrl: './window.component.html',
})
export class WindowComponent {
  @Input() headerText: string = 'welcome';
  @Input() bodyText: string =
    'Welcome to my website! It is still a WIP! Visit later ♥';
}
