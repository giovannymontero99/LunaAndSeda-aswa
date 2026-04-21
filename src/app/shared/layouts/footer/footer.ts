import { Component } from '@angular/core';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  readonly year = new Date().getFullYear();

  readonly columns: FooterColumn[] = [
    {
      title: 'Tienda',
      links: [
        { label: 'Labiales', href: '#' },
        { label: 'Sombras', href: '#' },
        { label: 'Cuidado facial', href: '#' },
        { label: 'Novedades', href: '#' },
      ],
    },
    {
      title: 'Compañía',
      links: [
        { label: 'Sobre nosotros', href: '#' },
        { label: 'Contacto', href: '#' },
        { label: 'Trabaja con nosotros', href: '#' },
      ],
    },
    {
      title: 'Ayuda',
      links: [
        { label: 'Envíos', href: '#' },
        { label: 'Devoluciones', href: '#' },
        { label: 'Términos y condiciones', href: '#' },
        { label: 'Política de privacidad', href: '#' },
      ],
    },
  ];

  readonly socials: FooterLink[] = [
    { label: 'Instagram', href: '#' },
    { label: 'Facebook', href: '#' },
    { label: 'TikTok', href: '#' },
  ];
}
