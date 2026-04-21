import { Component } from '@angular/core';
import { Navbar } from '../../shared/layouts/navbar/navbar';
import { Footer } from '../../shared/layouts/footer/footer';
import { Hero } from './sections/hero/hero';
import { Carousel, CarouselItem } from '../../shared/ui/organisms/carousel/carousel';
import { OnlineOrder } from './sections/online-order/online-order';
import { CustomerFavorites } from './sections/customer-favorites/customer-favorites';
import { Location } from './sections/location/location';

@Component({
  selector: 'app-home',
  imports: [Navbar, Footer, Hero, Carousel, OnlineOrder, CustomerFavorites, Location],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  featuredItems: CarouselItem[] = [
    { title: 'Descubre', description: 'Explora nuevas posibilidades cada día.', image: '/assets/images/carousel/carr-1.png' },
    { title: 'Aprende', description: 'Contenido seleccionado para crecer.', image: '/assets/images/carousel/carr-2.png' },
    { title: 'Comparte', description: 'Conéctate con la comunidad.', image: '/assets/images/carousel/carr-1.png' },
    { title: 'Crea', description: 'Herramientas para llevar tus ideas a la realidad.', image: '/assets/images/carousel/carr-2.png' },
    { title: 'Crece', description: 'Acompaña tu evolución con métricas.', image: '/assets/images/carousel/carr-1.png' },
  ];
}
