import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rain',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rain.component.html',
  styleUrl: './rain.component.scss',
})
export class RainComponent {
  images = ['assets/heart.png', 'assets/star.png'];

  raindrops: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.createRaindrops();
  }

  createRaindrops() {
    for (let i = 0; i < 100; i++) {
      const image = this.images[Math.floor(Math.random() * this.images.length)];
      const delay = `${Math.random() * 3}s`;
      const xPosition = `${Math.random() * 100}vw`;
      const size = `${10 + Math.random() * 30}px`;

      this.raindrops.push({ image, delay, xPosition, size });
    }
  }
}
