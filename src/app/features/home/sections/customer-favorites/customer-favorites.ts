import { Component } from '@angular/core';
import { Button } from '../../../../shared/ui/atoms/button/button';

@Component({
  selector: 'app-customer-favorites',
  imports: [Button],
  templateUrl: './customer-favorites.html',
  styleUrl: './customer-favorites.scss',
})
export class CustomerFavorites {
  readonly images = [
    '/assets/images/carousel/carr-1.png',
    '/assets/images/carousel/carr-2.png',
    '/assets/images/carousel/carr-1.png',
    '/assets/images/carousel/carr-2.png',
  ];
}
