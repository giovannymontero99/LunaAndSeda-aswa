import { Component, ElementRef, input, viewChild } from '@angular/core';
import { Card } from '../../molecules/card/card';

export interface CarouselItem {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
}

@Component({
  selector: 'app-carousel',
  imports: [Card],
  templateUrl: './carousel.html',
  styleUrl: './carousel.scss',
})
export class Carousel {
  items = input<CarouselItem[]>([]);
  title = input<string>('');

  private track = viewChild<ElementRef<HTMLDivElement>>('track');

  scroll(direction: 'prev' | 'next'): void {
    const el = this.track()?.nativeElement;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({ left: direction === 'next' ? amount : -amount, behavior: 'smooth' });
  }
}
