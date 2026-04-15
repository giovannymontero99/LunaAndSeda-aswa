import { Component, input } from '@angular/core';

export type CardVariant = 'elevated' | 'outlined' | 'flat';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  title = input<string>('');
  description = input<string>('');
  image = input<string | null>(null);
  imageAlt = input<string>('');
  variant = input<CardVariant>('elevated');
  clickable = input<boolean>(false);
}
