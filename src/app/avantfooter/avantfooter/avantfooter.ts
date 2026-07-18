import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Importation des icônes spécifiques requises pour le footer
import { faLocationDot, faPhone, faMagnifyingGlass, faCartShopping,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faXTwitter,  faInstagram, faPinterestP } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-avantfooter',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './avantfooter.html',
  styleUrl: './avantfooter.css',
})
export class Avantfooter{
  // Attribution des icônes à des variables pour le template HTML
  iconLocation = faLocationDot;
  iconPhone = faPhone;
  iconEnvelope = faEnvelope;
   iconSearch = faMagnifyingGlass;
  iconCart = faCartShopping;
  iconFacebook = faFacebookF;
  iconTwitter = faXTwitter;
  iconInstagram = faInstagram;
  iconPinterest = faPinterestP;
}
