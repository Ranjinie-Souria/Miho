import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DragWindowComponent } from './window/drag-window/dragwindow.component';
import { WindowComponent } from './window/window/window.component';
import { RainComponent } from './rain/rain.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    DragWindowComponent,
    WindowComponent,
    RainComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'Welcome to my place !';
}
