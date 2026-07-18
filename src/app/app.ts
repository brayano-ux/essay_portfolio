import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  faUser, 
  faCakeCandles, 
  faPhone,
  faEnvelope, 
  faLocationDot 
} from '@fortawesome/free-solid-svg-icons'; 
import { faFacebookF, faXTwitter, faInstagram, faPinterestP } from '@fortawesome/free-brands-svg-icons';
// Importations des composants locaux
import { Header } from './header/header/header';  
import { Headers } from './headers/headers/headers'; 
import { Main } from './main/main/main';
import { Services } from './services/services/services';
import { Projets } from './projets/projets/projets';
import { About } from './about/about/about';
import { Collection } from './collection/collection/collection';
import { Autre } from './autre/autre/autre';
import { Footer } from './footer/footer/footer';
import{Premiere} from './premiere/premiere/premiere';
import { Avantfooter } from './avantfooter/avantfooter/avantfooter';
import { StyleComponent } from './style/style/style';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    Collection,
    Avantfooter,
    StyleComponent,
    FontAwesomeModule,
    Header, 
    Headers, 
    Premiere,
    Main, 
    Services, 
    Projets, 
    About,
    Autre, 
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('premier_projet');
  protected readonly faUser = faUser;
  protected readonly faCakeCandles = faCakeCandles;
  protected readonly faEnvelope = faEnvelope;
  protected readonly faLocationDot = faLocationDot;
   iconLocation = faLocationDot;
  iconPhone = faPhone;
  iconEnvelope = faEnvelope;
 
  iconFacebook = faFacebookF;
  iconTwitter = faXTwitter;
  iconInstagram = faInstagram;
  iconPinterest = faPinterestP;
}
