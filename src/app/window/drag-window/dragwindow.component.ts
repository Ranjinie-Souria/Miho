import {
  Component,
  ElementRef,
  HostListener,
  Input,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'drag-window',
  standalone: true,
  imports: [],
  templateUrl: './dragwindow.component.html',
})
export class DragWindowComponent {
  @Input() headerText: string = 'welcome';
  @Input() bodyText: string =
    'Welcome to my website! It is still a WIP! Visit later ♥';

  @ViewChild('draggableWindow', { static: true }) windowElement:
    | ElementRef
    | undefined;
  @Input() currentX: number = 100;
  @Input() currentY: number = 150;

  isDragging = false;
  offsetX: number = 0;
  offsetY: number = 0;

  ngOnInit() {
    this.setWindowPosition();
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    if (this.windowElement) {
      this.isDragging = true;
      this.offsetX = event.clientX - this.currentX;
      this.offsetY = event.clientY - this.currentY;

      event.preventDefault();
    }
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isDragging && this.windowElement) {
      this.currentX = event.clientX - this.offsetX;
      this.currentY = event.clientY - this.offsetY;

      this.setWindowPosition();
    }
  }

  @HostListener('document:mouseup', [])
  onMouseUp() {
    this.isDragging = false;
  }

  setWindowPosition() {
    if (this.windowElement) {
      const el = this.windowElement.nativeElement;
      el.style.left = `${this.currentX}px`;
      el.style.top = `${this.currentY}px`;
    }
  }
}
