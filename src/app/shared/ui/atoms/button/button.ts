import { Component, input, output } from '@angular/core';

export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonType = 'button' | 'submit' | 'reset';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  size = input<ButtonSize>('md');
  variant = input<ButtonVariant>('primary');
  type = input<ButtonType>('button');
  disabled = input<boolean>(false);
  fullWidth = input<boolean>(false);

  clicked = output<MouseEvent>();

  onClick(event: MouseEvent): void {
    if (this.disabled()) return;
    this.clicked.emit(event);
  }
}
