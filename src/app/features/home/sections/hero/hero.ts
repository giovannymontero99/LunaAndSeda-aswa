import { Component } from '@angular/core';
import { Button } from '../../../../shared/ui/atoms/button/button';

@Component({
  selector: 'app-hero',
  imports: [Button],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {}
