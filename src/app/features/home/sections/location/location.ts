import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Button } from '../../../../shared/ui/atoms/button/button';

interface LocationInfo {
  label: string;
  value: string;
}

@Component({
  selector: 'app-location',
  imports: [Button],
  templateUrl: './location.html',
  styleUrl: './location.scss',
})
export class Location {
  private sanitizer = inject(DomSanitizer);

  readonly address = 'Calle 123 #45-67, Bogotá, Colombia';

  private readonly mapQuery = encodeURIComponent(this.address);
  readonly mapEmbedUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    `https://www.google.com/maps?q=${this.mapQuery}&output=embed`,
  );
  readonly directionsUrl = `https://www.google.com/maps/search/?api=1&query=${this.mapQuery}`;

  readonly info: LocationInfo[] = [
    { label: 'Dirección', value: this.address },
    { label: 'Horario', value: 'Lun – Sáb · 9:00 AM – 7:00 PM' },
    { label: 'Teléfono', value: '+57 300 123 4567' },
    { label: 'Correo', value: 'contacto@lunayseda.com' },
  ];
}
