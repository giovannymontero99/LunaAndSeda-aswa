import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Button } from '../../ui/atoms/button/button';

@Component({
  selector: 'app-navbar',
  imports: [Button],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  private router = inject(Router);

  goHome(): void {
    this.router.navigate(['/home']);
  }
}
