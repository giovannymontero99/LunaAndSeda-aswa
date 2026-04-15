import { Component } from '@angular/core';
import { Navbar } from '../../shared/layouts/navbar/navbar';
import { Hero } from './sections/hero/hero';
import { Carousel, CarouselItem } from '../../shared/ui/organisms/carousel/carousel';

@Component({
  selector: 'app-home',
  imports: [Navbar, Hero, Carousel],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  featuredItems: CarouselItem[] = [
    { title: 'Descubre', description: 'Explora nuevas posibilidades cada día.' },
    { title: 'Aprende', description: 'Contenido seleccionado para crecer.' },
    { title: 'Comparte', description: 'Conéctate con la comunidad.' },
    { title: 'Crea', description: 'Herramientas para llevar tus ideas a la realidad.' },
    { title: 'Crece', description: 'Acompaña tu evolución con métricas.' },
  ];
}
