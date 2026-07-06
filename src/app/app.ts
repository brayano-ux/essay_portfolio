import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header/header';  
import { Footer } from './footer/footer/footer';
import { Main } from './main/main/main';
import {Services} from './services/services/services';
import {Projets} from './projets/projets/projets';
import{About} from './about/about/about';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  faUser, 
  faCakeCandles, 
  faEnvelope, 
  faLocationDot 
} from '@fortawesome/free-solid-svg-icons'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footer, Main, FontAwesomeModule,Services,Projets,About],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('premier_projet');

  faUser = faUser;
  faCakeCandles = faCakeCandles;
  faEnvelope = faEnvelope;
  faLocationDot = faLocationDot;
}
